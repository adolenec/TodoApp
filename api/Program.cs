using api.Domain;
using api.Dto;
using api.Dtos;
using api.Interfaces;
using api.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<TodoContext>(options =>
    options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)); //dbContext is recreated every time
builder.Services.AddScoped<ITodoRepository, TodoRespository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/todos", (ITodoRepository repository) =>
    repository.GetTodosAsync());
app.MapGet("todos/{id}", async (int id, ITodoRepository repository) =>
{
    var todo = await repository.GetTodoAsync(id);

    if (todo is null)
        return Results.Problem($"Todo with Id {id} was not found", statusCode: 404);
    return Results.Ok(todo);
});
app.MapPost("/todos", async (TodoDetailsDto todoDto, ITodoRepository repository) =>
{
    var todo = await repository.AddTodoAsync(todoDto);
    return Results.Created($"/todos/{todo.Id}", todo);
});
app.MapPut("/todos", async (TodoDetailsDto todoDto, ITodoRepository repository) =>
{
    var todo = await repository.GetTodoAsync(todoDto.Id);
    if (todo is null)
        return Results.Problem($"Todo {todoDto.Id} was not found", statusCode: 404);

    var updatedTodo = await repository.UpdateTodoAsync(todoDto);
    return Results.Ok(updatedTodo);
});
app.MapDelete("/todos/{id}", async (int id, ITodoRepository repository) =>
{
    var todo = await repository.GetTodoAsync(id);
    if (todo is null)
        return Results.Problem($"Todo {id} was not found", statusCode: 404);
    await repository.DeleteTodoAsync(id);
    return Results.Ok();
});

app.Run();

