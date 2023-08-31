using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace api.Domain
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options)
        {
        }

        public DbSet<Todo> Todos => Set<Todo>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=todo.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Seed.SeedTodos(modelBuilder);
        }
    }
}

