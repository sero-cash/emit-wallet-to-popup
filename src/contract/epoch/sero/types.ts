import {MinerScenes} from "../../../pages/epoch/miner";
import {DeviceMode} from "../../../types";

// export interface Device {
//     base: number;
//     capacity: number;
//     power: number;
//     gene: string;
//     last: number;
// }

export interface DeviceInfo {
    category: string
    ticket: string;
    base: number;
    capacity: number;
    power: number;
    rate: string;
    gene: string;
    last: number;
    alis?: string;
    mode?: DeviceMode
}

export interface Driver {
    base: number;
    capacity: number;
    gene: string;
}

export interface PImage {
    serial: number;
    hash: string;
}

export interface UserInfo {
    scenes: MinerScenes;
    settlementPeriod: number;
    currentPeriod: number;
    lastUpdateTime: number;
    pImage: PImage;
    driver: DriverInfo;
}

export interface DriverInfo {
    name: string;
    base: number;
    capacity: number;
    rate: string;
    gene: string;
    alis?: string
}

export interface Period {
    ne: string
    total: string
    pool: string
}


export interface PositionDriverInfoRank {
    position: number
    data: Array<DriverInfoRank>

}

export interface PositionDeviceInfoRank {
    position: number
    data: Array<DeviceInfoRank>
}

export interface DriverInfoRank {
    owner: string
    scenes: MinerScenes
    name: string
    base: string
    capacity: string
    rate: string
    gene: string
    blockNum: number
}

export interface DeviceInfoRank {
    name: string
    ticket: string
    base: string
    capacity: string
    power: string
    rate: string
    gene: string
    last: number
    blockNum: number
}

export interface PoolTask {
    taskId: number
    owner: string
    name: string
    scenes: MinerScenes
    begin: number
    end: number
    lastSettlement: number
    targetNE: string
    reward: number
    currentTotalNE: string
    currentPrice: string
    currentUser: number
    currentMaxNE: string
    currentUserTotalNE:string
}

export interface WrappedDevice {
    name:string
    category:string
    ticket:string
    base:string
    capacity:string
    power:string
    rate:string
    gene:string
    freezeStartPeriod:number
    freezeFee:string
    current:string
    srcTkt:string
}