using System;
using Microsoft.EntityFrameworkCore;

namespace api.Domain
{
	public static class Seed
	{
		public static void SeedTodos(ModelBuilder builder)
		{
			builder.Entity<Todo>().HasData(new List<Todo>
			{
				new Todo
				{
					Id = 1,
					Name = "Create React App",
					Description = "Set up a new React application using Create React App with Typescript template.",
					DueDate = new DateTime(2023, 8, 29)
				},
				new Todo
				{
					Id = 2,
					Name = "Create minimal API",
					Description =  "Use the .NET CLI to create a new minimal API project.",
					DueDate = new DateTime(2023, 8, 30),
				},
                new Todo
                {
                    Id = 3,
                    Name = "Database Setup",
                    Description =  "Configure the database connection",
                    DueDate = new DateTime(2023, 8, 31),
                },
				new Todo
                {
                    Id = 4,
                    Name = "Database Migration",
                    Description =  "Generate a migration for domain entity changes.",
                    DueDate = new DateTime(2023, 9, 1),
                },
                new Todo
                {
                    Id = 5,
                    Name = "Create endpoints",
                    Description =  "Expose data for client application consumption",
                    DueDate = new DateTime(2023, 9, 2),
                },
                new Todo
                {
                    Id = 6,
                    Name = "CORS Configuration",
                    Description =  "Allow client to consume API endpoints",
                    DueDate = new DateTime(2023, 9, 3),
                },
                new Todo
                {
                    Id = 7,
                    Name = "Create components",
                    Description =  "Create components needed for application requirements",
                    DueDate = new DateTime(2023, 9, 4),
                },
                new Todo
                {
                    Id = 8,
                    Name = "Add routing",
                    Description =  "Create required application routes",
                    DueDate = new DateTime(2023, 9, 5),
                },
            });
		}
	}
}

