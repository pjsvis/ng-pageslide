/**
 * Test Suite with Id and Name
 * 
 * @interface ITestSuite
 */
interface ITestSuite {
    Id: number;
    Name: string;
    $$hashKey: string;

}

/**
 * Active and available test suites
 * 
 * @interface IDataService
 */
interface IDataService {
    availableTestSuites: ITestSuite[];
    testSuites: ITestSuite[];
}
angular.module('app').factory('DataService', function () {

    let availableTestSuites: ITestSuite[] = [{ "Id": 124, "Name": "E2E_02 [POS]", "$$hashKey": "object:1193" }, { "Id": 125, "Name": "E2E_03 [POS]", "$$hashKey": "object:1194" }, { "Id": 126, "Name": "E2E_04 [POS CDA Mode1/2]", "$$hashKey": "object:1195" }, { "Id": 127, "Name": "E2E_04 [POS CDA Mode 3]", "$$hashKey": "object:1196" }, { "Id": 128, "Name": "E2E_05 [POS]", "$$hashKey": "object:1197" }, { "Id": 129, "Name": "E2E_06 [POS]", "$$hashKey": "object:1198" }, { "Id": 130, "Name": "E2E_07 [POS]", "$$hashKey": "object:1199" }, { "Id": 131, "Name": "E2E_08 [POS]", "$$hashKey": "object:1200" }, { "Id": 132, "Name": "E2E_09 [POS]", "$$hashKey": "object:1201" }, { "Id": 133, "Name": "E2E_10 [POS]", "$$hashKey": "object:1202" }, { "Id": 134, "Name": "E2E_12 [POS]", "$$hashKey": "object:1203" }, { "Id": 135, "Name": "E2E_13 [POS]", "$$hashKey": "object:1204" }, { "Id": 136, "Name": "E2E_14 [POS]", "$$hashKey": "object:1205" }, { "Id": 137, "Name": "E2E_15 [POS]", "$$hashKey": "object:1206" }, { "Id": 138, "Name": "E2E_16 [POS]", "$$hashKey": "object:1207" }, { "Id": 139, "Name": "E2E_19 [POS]", "$$hashKey": "object:1208" }, { "Id": 140, "Name": "E2E_20 [POS]", "$$hashKey": "object:1209" }, { "Id": 141, "Name": "E2E_21 [POS]", "$$hashKey": "object:1210" }, { "Id": 142, "Name": "E2E_22 [POS]", "$$hashKey": "object:1211" }, { "Id": 143, "Name": "E2E_23 [POS]", "$$hashKey": "object:1212" }, { "Id": 144, "Name": "E2E_27 [POS]", "$$hashKey": "object:1213" }, { "Id": 145, "Name": "E2E_28 [POS]", "$$hashKey": "object:1214" }, { "Id": 146, "Name": "E2E_29 [POS]", "$$hashKey": "object:1215" }, { "Id": 147, "Name": "E2E_32 [POS]", "$$hashKey": "object:1216" }, { "Id": 148, "Name": "E2E_33 [POS]", "$$hashKey": "object:1217" }, { "Id": 149, "Name": "E2E_35 [POS]", "$$hashKey": "object:1218" }, { "Id": 150, "Name": "E2E_36 [POS]", "$$hashKey": "object:1219" }, { "Id": 151, "Name": "E2E_38 [POS]", "$$hashKey": "object:1220" }, { "Id": 152, "Name": "E2E_39 [POS]", "$$hashKey": "object:1221" }, { "Id": 153, "Name": "E2E_42 [POS]", "$$hashKey": "object:1222" }, { "Id": 154, "Name": "E2E_43 [POS]", "$$hashKey": "object:1223" }, { "Id": 155, "Name": "E2E_44 [POS]", "$$hashKey": "object:1224" }, { "Id": 156, "Name": "E2E_45 [POS]", "$$hashKey": "object:1225" }, { "Id": 157, "Name": "E2E_46 [POS]", "$$hashKey": "object:1226" }, { "Id": 158, "Name": "E2E_47 [POS]", "$$hashKey": "object:1227" }, { "Id": 159, "Name": "E2E_48 [POS, field55 reversal]", "$$hashKey": "object:1228" }, { "Id": 160, "Name": "E2E_48 [POS, no 55 reversal]", "$$hashKey": "object:1229" }, { "Id": 161, "Name": "E2E_49 [POS,US]", "$$hashKey": "object:1230" }, { "Id": 162, "Name": "E2E_49 [POS,non-US]", "$$hashKey": "object:1231" }, { "Id": 163, "Name": "E2E_50 [POS]", "$$hashKey": "object:1232" }, { "Id": 164, "Name": "E2E_51 [POS]", "$$hashKey": "object:1233" }, { "Id": 165, "Name": "E2E_53 [POS]", "$$hashKey": "object:1234" }, { "Id": 166, "Name": "E2E_55 [POS]", "$$hashKey": "object:1235" }, { "Id": 167, "Name": "E2E_02 [ATM]", "$$hashKey": "object:1236" }, { "Id": 168, "Name": "E2E_05 [ATM]", "$$hashKey": "object:1237" }, { "Id": 169, "Name": "E2E_06 [ATM]", "$$hashKey": "object:1238" }, { "Id": 170, "Name": "E2E_07 [ATM]", "$$hashKey": "object:1239" }, { "Id": 171, "Name": "E2E_08 [ATM]", "$$hashKey": "object:1240" }, { "Id": 172, "Name": "E2E_09/E2E_10 [ATM]", "$$hashKey": "object:1241" }, { "Id": 173, "Name": "E2E_13 [ATM]", "$$hashKey": "object:1242" }, { "Id": 174, "Name": "E2E_15 [ATM]", "$$hashKey": "object:1243" }, { "Id": 175, "Name": "E2E_16 [ATM]", "$$hashKey": "object:1244" }, { "Id": 176, "Name": "E2E_20 [ATM]", "$$hashKey": "object:1245" }, { "Id": 177, "Name": "E2E_22 [ATM]", "$$hashKey": "object:1246" }, { "Id": 178, "Name": "E2E_23 [ATM]", "$$hashKey": "object:1247" }, { "Id": 179, "Name": "E2E_29 [ATM]", "$$hashKey": "object:1248" }, { "Id": 180, "Name": "E2E_32 [ATM]", "$$hashKey": "object:1249" }, { "Id": 181, "Name": "E2E_34 [ATM]", "$$hashKey": "object:1250" }, { "Id": 182, "Name": "E2E_35 [ATM]", "$$hashKey": "object:1251" }, { "Id": 183, "Name": "E2E_36 [ATM]", "$$hashKey": "object:1252" }, { "Id": 184, "Name": "E2E_38 [ATM]", "$$hashKey": "object:1253" }, { "Id": 185, "Name": "E2E_39 [ATM]", "$$hashKey": "object:1254" }, { "Id": 186, "Name": "E2E_48 [ATM, field 55 reversal]", "$$hashKey": "object:1255" }, { "Id": 187, "Name": "E2E_48 [ATM, no 55 reversal]", "$$hashKey": "object:1256" }, { "Id": 188, "Name": "E2E_52 [AFD]", "$$hashKey": "object:1257" }];
    let testSuites: ITestSuite[] = [{ "Id": 7, "Name": "E2E Contact 1.3 [13]", "$$hashKey": "object:913" }, { "Id": 8, "Name": "E2E Contactless 1.2 [4]", "$$hashKey": "object:914" }];
    let fac: IDataService = {
        availableTestSuites: availableTestSuites,
        testSuites: testSuites
    };
    return fac;
});