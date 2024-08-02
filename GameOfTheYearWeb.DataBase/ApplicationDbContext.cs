using GameOfTheYearWeb.DataBase.Entity;
using Microsoft.EntityFrameworkCore;

namespace GameOfTheYearWeb.DataBase
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options) { }

        public DbSet<Record> Records => Set<Record>();
    }
}
