using System;
using api.Domain;
using api.Dto;
using api.Dtos;
using api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
	public class TodoRespository : ITodoRepository
	{
        private readonly TodoContext _context;

        public TodoRespository(TodoContext context)
		{
            _context = context;
        }

        private static void DtoToEntity(TodoDetailsDto dto, Todo entity)
        {
            entity.Name = dto.Name;
            entity.Description = dto.Description;
            entity.DueDate = dto.DueDate;
        }

        private static TodoDetailsDto EntityToDetailsDto(Todo entity)
        {
            return new TodoDetailsDto(entity.Id, entity.Name, entity.Description, entity.DueDate);
        }

        public async Task<IList<TodoDto>> GetTodosAsync()
        {
            return await _context.Todos
                .Select(t => new TodoDto(t.Id, t.Name, t.DueDate))
                .ToListAsync();
        }

        public async Task<TodoDetailsDto?> GetTodoAsync(int id)
        {
            var todo = await _context.Todos.FirstOrDefaultAsync(
                t => t.Id == id);

            if (todo is null)
                return null;

            return EntityToDetailsDto(todo);
        }

        public async Task<TodoDetailsDto> AddTodoAsync(TodoDetailsDto todoDto)
        {
            var todo = new Todo();
            DtoToEntity(todoDto, todo);
            _context.Todos.Add(todo);
            await _context.SaveChangesAsync();
            return EntityToDetailsDto(todo);
        }

        public async Task<TodoDetailsDto> UpdateTodoAsync(TodoDetailsDto todoDto)
        {
            var todo = await _context.Todos.FindAsync(todoDto.Id);
            if (todo is null)
                throw new ArgumentException($"Error updating todo");
            DtoToEntity(todoDto, todo);
            _context.Entry(todo).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return EntityToDetailsDto(todo);
        }

        public async Task DeleteTodoAsync(int id)
        {
            var todo = await _context.Todos.FindAsync(id);
            if (todo is null)
                throw new ArgumentException($"Error updating todo");
            _context.Todos.Remove(todo);
            await _context.SaveChangesAsync();
        }
	}
}

