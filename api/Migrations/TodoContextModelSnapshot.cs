﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Domain;

#nullable disable

namespace api.Migrations
{
    [DbContext(typeof(TodoContext))]
    partial class TodoContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.10");

            modelBuilder.Entity("api.Domain.Todo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DueDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Todos");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Set up a new React application using Create React App with Typescript template.",
                            DueDate = new DateTime(2023, 8, 29, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Create React App"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Use the .NET CLI to create a new minimal API project.",
                            DueDate = new DateTime(2023, 8, 30, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Create minimal API"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Configure the database connection",
                            DueDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Database Setup"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Generate a migration for domain entity changes.",
                            DueDate = new DateTime(2023, 9, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Database Migration"
                        },
                        new
                        {
                            Id = 5,
                            Description = "Expose data for client application consumption",
                            DueDate = new DateTime(2023, 9, 2, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Create endpoints"
                        },
                        new
                        {
                            Id = 6,
                            Description = "Allow client to consume API endpoints",
                            DueDate = new DateTime(2023, 9, 3, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "CORS Configuration"
                        },
                        new
                        {
                            Id = 7,
                            Description = "Create components needed for application requirements",
                            DueDate = new DateTime(2023, 9, 4, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Create components"
                        },
                        new
                        {
                            Id = 8,
                            Description = "Create required application routes",
                            DueDate = new DateTime(2023, 9, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Add routing"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
