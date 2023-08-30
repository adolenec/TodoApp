using System;
using api.Dto;
using api.Dtos;

namespace api.Interfaces
{
	public interface ITodoRepository
	{
		Task<IList<TodoDto>> GetTodosAsync();
		Task<TodoDetailsDto?> GetTodoAsync(int id);
		Task<TodoDetailsDto> AddTodoAsync(TodoDetailsDto todoDto);
		Task<TodoDetailsDto> UpdateTodoAsync(TodoDetailsDto todoDto);
		Task DeleteTodoAsync(int id);
    }
}

