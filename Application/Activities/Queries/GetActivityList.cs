using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<List<Activity>>{}; // This class represents the query to get a list of activities. It implements the IRequest interface from MediatR, which allows it to be handled by a corresponding handler.

    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>> // This class is responsible for handling the Query. It implements the IRequestHandler interface from MediatR, which requires it to define a Handle method that takes a Query and returns a List of Activity objects.
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Activities.ToListAsync(cancellationToken); // This line retrieves all activities from the database context and returns them as a list. The ToListAsync method is used to execute the query asynchronously, and the cancellationToken is passed to allow for cancellation of the operation if needed.
        }
    }


}
