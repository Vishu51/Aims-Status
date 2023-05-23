<template>
  <div>
    <!-- HEADER -->
    <div>
      <v-system-bar height="40" dark color="#3B517E">
        <div class="left-pad pt-2" white--text>
          <img
            width="90"
            src="@/assets/img/solum_logo_w.svg"
            alt="solum website"
          />
        </div>
        <v-spacer></v-spacer>
        <div style="padding-right: 135px !important">My Account</div>
      </v-system-bar>
      <v-system-bar height="90" dark color="#00254D">
        <div class="left-pad" white--text>
          <img
            width="150"
            src="@/assets/img/AIMS_SaaS_logo.svg"
            alt="solum website"
          />
          <p white--text>Last Updated: {{ lastUpdatedTime }}</p>
        </div>
        <v-spacer></v-spacer>
      </v-system-bar>
    </div>
    <!-- REFRESH SECTION -->
    <div class="d-flex">
      <v-row class="left-pad" style="padding-top: 31px">
        <v-col cols="12" sm="4">
          <div class="custom-label-for-input">Refresh Every</div>
          <v-select
            v-model="selected"
            class="select-column"
            label=""
            :items="timeOptions"
            placeholder="Select Interval"
            item-text="text"
            item-value="value"
            @change="getSelected($event)"
            outlined
            dense
          >
          </v-select>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <div class="d-flex align-center right-pad">
        <div class="px-4">
          <span>
            <img
              class="pt-1 pr-2"
              src="@/assets/img/ic_good.svg"
              alt="active"
            />
          </span>
          Good
        </div>
        <div class="px-4">
          <span>
            <img
              class="pt-1 pr-2"
              src="@/assets/img/ic_information.svg"
              alt="active"
            /> </span
          >Information
        </div>
        <div class="px-4">
          <span>
            <img
              class="pt-1 pr-2"
              src="@/assets/img/ic_Warning.svg"
              alt="active"
            /> </span
          >Warning
        </div>
        <div class="px-4">
          <span>
            <img
              class="pt-1 pr-2"
              src="@/assets/img/ic_Critical.svg"
              alt="active"
            /> </span
          >Critical
        </div>
        <div class="px-4">
          <span>
            <img
              class="pt-1 pr-2"
              src="@/assets/img/ic_N-A.svg"
              alt="active"
            /> </span
          >N/A
        </div>
      </div>
    </div>
    <!-- TABLE -->
    <div class="left-pad right-pad">
      <v-tabs v-model="selectedTab" left background-color="#00254d" dark>
        <!-- TAB HEADERS -->
        <v-tab disabled>
          <span style="color: white !important">CURRENT IMPACT</span>
        </v-tab>
        <v-tab v-for="tab in tabHeader" :key="tab" @click.stop="whichTab(tab)">
          {{ tab }}
        </v-tab>
        <!-- TAB HEADERS END-->

        <!-- TAB ITEMS SECTION START -->
        <!-- REQUIRED FOR CURRENT IMPACT DO NOT REMOVE IT -->
        <v-tab-item> </v-tab-item>
        <!-- AMERICA -->
        <v-tab-item>
          <v-simple-table fixed-header height="350px">
            <template v-slot:default>
              <thead height="90">
                <tr>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Product and Services
                  </th>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Databases Server</h3>
                  </td>
                </tr>
                <!-- LIST PS-SQL -->
                <tr v-for="(item, idx) in pgSql" :key="idx">
                  <td colspan="7">{{ ` PostgreSQL ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- NO-SQL LIST -->
                <tr v-for="item in noSql" :key="item.name">
                  <td colspan="7">{{ `MongoDB Atlas ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Micro Services</h3>
                  </td>
                </tr>
                <!-- LIST MS -->
                <tr v-for="item in isMs" :key="item.name">
                  <td colspan="7">{{ getNames(item.name) }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-tab-item>
        <!-- EUROPE -->
        <v-tab-item>
          <v-simple-table fixed-header height="350px">
            <template v-slot:default>
              <thead height="90">
                <tr>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Product and Services
                  </th>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Databases Server</h3>
                  </td>
                </tr>
                <!-- LIST PS-SQL -->
                <tr v-for="(item, idx) in pgSql" :key="idx">
                  <td colspan="7">{{ ` PostgreSQL ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- NO-SQL LIST -->
                <tr v-for="item in noSql" :key="item.name">
                  <td colspan="7">{{ `MongoDB Atlas ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Micro Services</h3>
                  </td>
                </tr>
                <!-- LIST MS -->
                <tr v-for="item in isMs" :key="item.name">
                  <td colspan="7">{{ getNames(item.name) }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-tab-item>
        <!-- ASIA -->
        <v-tab-item>
          <v-simple-table fixed-header height="350px">
            <template v-slot:default>
              <thead height="90">
                <tr>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Product and Services
                  </th>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Databases Server</h3>
                  </td>
                </tr>
                <!-- LIST PS-SQL -->
                <tr v-for="(item, idx) in pgSql" :key="idx">
                  <td colspan="7">{{ ` PostgreSQL ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- NO-SQL LIST -->
                <tr v-for="item in noSql" :key="item.name">
                  <td colspan="7">{{ `MongoDB Atlas ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Micro Services</h3>
                  </td>
                </tr>
                <!-- LIST MS -->
                <tr v-for="item in isMs" :key="item.name">
                  <td colspan="7">{{ getNames(item.name) }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-tab-item>
        <!-- STAGE -->
        <v-tab-item>
          <v-simple-table fixed-header height="350px">
            <template v-slot:default>
              <thead height="90">
                <tr>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Product and Services
                  </th>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Databases Server</h3>
                  </td>
                </tr>
                <!-- LIST PS-SQL -->
                <tr v-for="(item, idx) in pgSql" :key="idx">
                  <td colspan="7">{{ ` PostgreSQL ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- NO-SQL LIST -->
                <tr v-for="item in noSql" :key="item.name">
                  <td colspan="7">{{ `MongoDB Atlas ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Micro Services</h3>
                  </td>
                </tr>
                <!-- LIST MS -->
                <tr v-for="item in isMs" :key="item.name">
                  <td colspan="7">{{ getNames(item.name) }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-tab-item>
        <!-- BIG VOLUME -->
        <v-tab-item>
          <v-simple-table fixed-header height="350px">
            <template v-slot:default>
              <thead height="90">
                <tr>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Product and Services
                  </th>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Databases Server</h3>
                  </td>
                </tr>
                <!-- LIST PS-SQL -->
                <tr v-for="(item, idx) in pgSql" :key="idx">
                  <td colspan="7">{{ ` PostgreSQL ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- NO-SQL LIST -->
                <tr v-for="item in noSql" :key="item.name">
                  <td colspan="7">{{ `MongoDB Atlas ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Micro Services</h3>
                  </td>
                </tr>
                <!-- LIST MS -->
                <tr v-for="item in isMs" :key="item.name">
                  <td colspan="7">{{ getNames(item.name) }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-tab-item>
        <!-- STI -->
        <v-tab-item>
          <v-simple-table fixed-header height="350px">
            <template v-slot:default>
              <thead height="90">
                <tr>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    Product and Services
                  </th>
                  <th
                    colspan="7"
                    style="background-color: #A6ABBD; !important; color: #ffffffb3;"
                    class="text-left"
                  >
                    STI
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Databases Server</h3>
                  </td>
                </tr>
                <!-- LIST PS-SQL -->
                <tr v-for="(item, idx) in pgSql" :key="idx">
                  <td colspan="7">{{ ` PostgreSQL ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- NO-SQL LIST -->
                <tr v-for="item in noSql" :key="item.name">
                  <td colspan="7">{{ `MongoDB Atlas ${item.name}` }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
                <!-- SUB HEADING -->
                <tr>
                  <td class="subheader-row" colspan="14">
                    <h3>Micro Services</h3>
                  </td>
                </tr>
                <!-- LIST MS -->
                <tr v-for="item in isMs" :key="item.name">
                  <td colspan="7">{{ getNames(item.name) }}</td>
                  <td colspan="7">
                    <img :src="getSignal(item.status)" alt="active" />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-tab-item>

        <!-- TAB ITEMS SECTION END -->
      </v-tabs>
    </div>
    <!-- FOOTER -->
    <div class="left-pad mt-3 pt-3">
      <v-footer>
        <v-row class="d-flex">
          <v-col class="d-flex mt-3">
            <p class="px-2">Feedback</p>
            <p class="px-2">Trademarks</p>
            <p class="px-2">Privacy & Cookies</p>
            <p class="px-2">Terms of use</p>
          </v-col>
          <v-spacer></v-spacer>
          <div class="right-pad">
            <img
              style="margin-left: 185px"
              width="110"
              src="@/assets/img/solum_logo_b.svg"
              alt="solum website"
            />
            <p>Copyright @ 2023 SOLUM, All Rights reserved.</p>
          </div>
        </v-row>
      </v-footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "MyAccount",
  components: {},
  data() {
    return {
      selected: 2,
      pgSql: [],
      noSql: [],
      isMs: [],
      hostUrl: "",
      serverList: {},
      selectedTab: 1,
      tabHeader: [],
      setInterval: 0,
      lastUpdatedTime:''
    };
  },
  computed: {
    timeOptions() {
      return [
        { text: "2 minutes", value: 2 },
        { text: "5 minutes", value: 5 },
        { text: "10 minutes", value: 10 },
        { text: "30 minutes", value: 30 },
      ];
    },
  },
  watch: {},
  async mounted() {
    clearInterval(this.setInterval)
    let getServer = await fetch(process.env.BASE_URL + "server_list.json");
    this.serverList = await getServer.json();
    this.tabHeader = await Object.keys(this.serverList);
    this.getSelected(2);
  },
  beforeDestroy() {
    clearInterval(this.setInterval);
  },
  methods: {
    // FUNCTION TO GET COUNTDOWN TIME BASED ON DIFFERENT TIME OPTIONS
    getSelected(val) {
      let duration = val * 60 * 1000 || 10000;
      this.whichTab(this.tabHeader[this.selectedTab - 1]);
      clearInterval(this.setInterval);
      this.setInterval = setInterval(() => {
        this.whichTab(this.tabHeader[this.selectedTab - 1]);
      }, duration);
    },

    // FUNCTION TO GET ICONS BASED ON THE BOOLEAN VALUE
    getSignal(item) {
      if (item === 1) {
        return require("../assets/img/ic_good.svg");
      } else {
        return require("../assets/img/ic_Critical.svg");
      }
    },

    // CUSTOMIZE NAME FUNCTION
    getNames(name) {
      if (name) {
        if (name === "api") {
          return "API Service";
        }
        if (name === "ig") {
          return "Image Generator";
        }
        if (name === "inbound") {
          return "Inbound";
        }
        if (name === "outbound") {
          return "Outbound";
        }
        if (name === "realtime") {
          return "Real Time";
        }
        if (name === "scheduler") {
          return "Scheduler";
        }
      } else {
        return name;
      }
    },

    // FUNCTION TO EXTRACT PROPERTIES FROM THE OBJECT
    extractNestedProperty(obj, propertyPath) {
      const properties = propertyPath.split(".");
      let value = obj;

      for (let prop of properties) {
        if (value && value.hasOwnProperty(prop)) {
          value = value[prop];
        } else {
          return undefined;
        }
      }

      return value;
    },

    // ###### get STATUS DATA #####
    // @@@@ API URL: 'api/v1/status'
    async getAccountStatus() {
      this.lastUpdatedTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      axios
        .get(`${this.hostUrl}api/v1/status`, {})
        .then((res) => {
          
          if (res.data) {
            this.pgSql = this.extractNestedProperty(res.data.db, "pgsql");
            this.noSql = this.extractNestedProperty(res.data.db, "nosql");
            this.isMs = res.data.ms.map((obj) => {
              return {
                name: obj.name,
                status: obj.status,
              };
            });
          } else {
            this.pgSql = [];
            this.noSql = [];
            this.isMs = [];
          }
        })
        .catch((ex) => {
          console.log("ERROR!! ", ex);
          clearInterval(this.setInterval)
        });
    },

    // FUNCTION TO CALL API BASED ON THE TAB SELECTED
    async whichTab(tabName) {
      if (tabName === "AMERICAS") {
        this.hostUrl = this.serverList['AMERICAS'];
      } else if (tabName === "EUROPE") {
        this.hostUrl = this.serverList['EUROPE'];
      } else if (tabName === "ASIA") {
        this.hostUrl = this.serverList['ASIA'];
      } else if (tabName === "STAGE") {
        this.hostUrl = this.serverList['STAGE'];
      } else if (tabName === "BIG VOLUME") {
        this.hostUrl = this.serverList['BIG VOLUME'];
      } else if (tabName === "STI") {
        this.hostUrl = this.serverList['STI'];
      }
      this.getAccountStatus();
    },
  },
};
</script>

<style scoped>
.theme--dark.v-system-bar {
  color: #fff;
}
.greenSignal {
  background: url(../assets/img/ic_good.svg) no-repeat;
}
.left-pad {
  padding-left: 135px !important;
}
.right-pad {
  padding-right: 135px !important;
}
.subheader-row {
  background-color: #ececec; /* Customize the background color */
}
::v-deep.select-column::placeholder {
  color: white !important;
}
::v-deep.theme--light.v-select .v-select__selections {
  color: #ffffff !important;
}
::v-deep.v-data-table--fixed-header > .v-data-table__wrapper {
  overflow-y: overlay;
}
.v-tab--disabled {
  opacity: 1.5;
}
</style>
