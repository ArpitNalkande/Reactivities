using System;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>(); // This line defines a mapping configuration between the Activity class and itself. It allows AutoMapper to map properties from one instance of the Activity class to another instance of the same class. This is useful for scenarios where you want to update an existing entity with new values while preserving certain properties (like Id) that should not be overwritten.
    }
}
