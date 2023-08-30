using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Todos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    DueDate = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Todos", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Todos",
                columns: new[] { "Id", "Description", "DueDate", "Name" },
                values: new object[,]
                {
                    { 1, "Set up a new React application using Create React App with Typescript template.", new DateTime(2023, 8, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), "Create React App" },
                    { 2, "Use the .NET CLI to create a new minimal API project.", new DateTime(2023, 8, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), "Create minimal API" },
                    { 3, "Configure the database connection", new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified), "Database Setup" },
                    { 4, "Generate a migration for domain entity changes.", new DateTime(2023, 9, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Database Migration" },
                    { 5, "Expose data for client application consumption", new DateTime(2023, 9, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "Create endpoints" },
                    { 6, "Allow client to consume API endpoints", new DateTime(2023, 9, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "CORS Configuration" },
                    { 7, "Create components needed for application requirements", new DateTime(2023, 9, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "Create components" },
                    { 8, "Create required application routes", new DateTime(2023, 9, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Add routing" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Todos");
        }
    }
}
