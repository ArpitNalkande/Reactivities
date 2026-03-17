using System;
using System.Diagnostics;
using MediatR;
using Persistence;
using Domain;
using AutoMapper;

namespace Application.Commands;

public class EditActitvity
{
    public class Command : IRequest
    {
        public required Domain.Activity Activity { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken)
            ?? throw new Exception("Activity not found");


            mapper.Map(request.Activity, activity); // This line uses AutoMapper to map the properties from the incoming request.Activity object to the existing activity entity retrieved from the database. This allows for updating the existing entity with the new values provided in the request
             await context.SaveChanges(cancellationToken); // This line saves the changes made to the database context, which includes the updated activity entity. The SaveChangesAsync method is used to execute the operation asynchronously, and the cancellationToken is passed to allow for cancellation of the operation if needed.
        }
    }
}
