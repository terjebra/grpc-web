using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;

namespace server
{
    public class SunriseService : Sunrise.SunriseBase
    {
        private readonly ILogger<SunriseService> _logger;
        private readonly IWeatherApi _weatherApi;

        public SunriseService(ILogger<SunriseService> logger, IWeatherApi weatherApi)
        {
            _logger = logger;
            _weatherApi = weatherApi;
        }

        public override async Task<SunriseResponse> GetSunrise(SunriseRequest request, ServerCallContext context)
        {
            var sundata = await _weatherApi.GetSunrise(request.Latitude, request.Longitude);

            return new SunriseResponse
            {
                SunsetTimestamp = sundata.Sunset,
                SunriseTimestamp = sundata.Sunrise
            };
        }

    }
}
