using System;
namespace api.Dtos
{
    public record TodoDetailsDto(int Id, string Name, string Description, DateTime DueDate);
}

