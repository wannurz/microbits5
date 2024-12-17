//% weight=100 color=#0fbc11 icon="\uf10c"
namespace Parkwan {
    // ฟังก์ชันสำหรับยกกำลัง
    //% blockId="id_pow" block="%base | raised to %exp"
    export function fn_raiseto(base: number, exp: number): number {
        return Math.pow(base, exp);
    }

    // ฟังก์ชันสำหรับแสดงข้อความ
    //% blockId="id_show_message" block="show message %msg"
    export function showMessage(msg: string): void {
        basic.showString(msg);
    }
}
