using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Xml;

namespace server
{
    public interface IWeatherApi
    {
        Task<SunData> GetSunrise(double latitude, double longitude);
    }

    public class WeatherApi : IWeatherApi
    {
        private readonly HttpClient _httpClient;

        public WeatherApi(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<SunData> GetSunrise(double latitude, double longitude)
        {
            var now = DateTime.Now;

            var url = $"https://api.met.no/weatherapi/sunrise/2.0/?lat={latitude}&lon={longitude}&date={now.Year}-{now.Month.ToString("00")}-{now.Day.ToString("00")}&offset=+01:00";

            var responseString = await _httpClient.GetAsync(url);

            if (responseString.IsSuccessStatusCode)
            {
                var data = await responseString.Content.ReadAsStringAsync();

                var document = new XmlDocument();
                document.LoadXml(data);

                var root = document.DocumentElement;
                var sunrise = root.SelectSingleNode("location/time/sunrise/@time");
                var sunset = root.SelectSingleNode("location/time/sunset/@time");

                return new SunData(
                    sunset != null ? sunset.Value : null,
                    sunrise != null ? sunrise.Value : null
                );
            }
            return new SunData();
        }
    }

    public class SunData
    {
        public SunData(string sunset, string sunrise)
        {
            this.Sunset = sunset;
            this.Sunrise = sunrise;
        }
        public SunData()
        {

        }

        public string Sunset { get; set; }
        public string Sunrise { get; set; }

    }

}
