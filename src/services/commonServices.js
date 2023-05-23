import { ApiHelper } from './helper/ApiHelper'
const apiHelper = new ApiHelper()
export class CommonServices {
  getStatus (config = {}) {
    const uri = 'api/v1/status'
    return apiHelper.get(uri, config)
  }
}
0