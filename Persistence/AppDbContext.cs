using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class AppDbContext(DbContextOptions<AppDbContext> options):DbContext(options)
{
    public required DbSet<Activity> Activities { get; set; }

    public async Task SaveChanges(CancellationToken cancellationToken)
    {
        try
        {
            await base.SaveChangesAsync(cancellationToken);
        }
        catch (Exception ex)
        {
            // Log the exception or handle it as needed
            throw new Exception("An error occurred while saving changes to the database.", ex);
        }
    }
}