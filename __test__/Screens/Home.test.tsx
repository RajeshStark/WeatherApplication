import axios, { AxiosResponse } from "axios";
import { getCountryData } from "../../src/Services";


jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('test suit for axios country data', () => {
    test('testing api fetching for country data', async () => {

        let dataValue = {};
        let country = 'india'
        const MockedResponse : AxiosResponse = {
            data: dataValue,
            status: 200,
            statusText: 'OK',
            config: {},
            headers: {}
        }

        mockedAxios.get.mockResolvedValueOnce(MockedResponse);
        mockedAxios.get.mockRejectedValueOnce(new Error("Something Wrong"))

        const data = await getCountryData(country);
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(data).toMatchObject(dataValue)

    })
})