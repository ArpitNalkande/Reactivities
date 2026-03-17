using System;
using Application.Activities.Queries;
using Application.Commands;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using SQLitePCL;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    // private readonly AppDbContext _context;
    // private readonly IMediator _mediator;

    // public ActivitiesController(IMediator mediator)
    // {
    //     // _context = context;
    //     _mediator = mediator;
    // }

    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities() 
    {
        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetails(string id)
    {
       return await Mediator.Send(new GetActivityDetails.Query {Id = id});
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(Activity activity)
    {
        return await Mediator.Send(new CreateActivity.Command { Activity = activity });
    }

    [HttpPut]
    public async Task<ActionResult> EditActivity(Activity activity)
    {
        await Mediator.Send(new EditActitvity.Command { Activity = activity });
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        await Mediator.Send(new DeleteActivity.Command { Id = id });
          return Ok();
    }

};

