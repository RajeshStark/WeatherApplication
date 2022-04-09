import axios, { AxiosResponse } from "axios";
import { getCountryData } from "../../src/Services";


jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('test suit for axios capital weather data', () => {
    test('testing api fetching for capital weather data', async () => {

        let dataValue = {};
        let cityName = 'New Delhi'
        const MockedResponse : AxiosResponse = {
            data: dataValue,
            status: 200,
            statusText: 'OK',
            config: {},
            headers: {}
        }

        mockedAxios.get.mockResolvedValueOnce(MockedResponse);
        mockedAxios.get.mockRejectedValueOnce(new Error("Something Wrong"))

        const data = await getCountryData(cityName);
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(data).toMatchObject(dataValue)

    })
})