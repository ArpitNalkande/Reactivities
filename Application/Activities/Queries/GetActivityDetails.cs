using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
    public class Query:IRequest<Activity>
    {
        public required string  Id { get; set; } // This property represents the unique identifier of the activity for which details are being requested. It is of type Guid, which is a globally unique identifier.
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync(new object[] { request.Id }, cancellationToken); // This line attempts to find an activity in the database context using the provided Id from the Query. The FindAsync method is used to execute the query asynchronously, and the cancellationToken is passed to allow for cancellation of the operation if needed.
            return activity; // This line returns the found activity, or null if no matching entity was found.
        }
    }
}
