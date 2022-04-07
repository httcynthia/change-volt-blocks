/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/


/**
* Custom blocks
*/
//% weight=100 color=#037c28 icon="\uf079"
namespace Flexibit {
    /**
    * To disable protection of Suez
    */
    //% block
    export function disable(): void {
    
        let i2c_id = 40
        let dr4 = 0x3008
         pins.i2cWriteNumber(
            i2c_id,
            dr4,
            NumberFormat.UInt16LE,
            false
        )
        basic.pause(500)
        basic.pause(500)
        basic.showLeds(`
         # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
       
        
    }

    /**
    * To change ch2 voltage to 3.6V
    */
    //% block
    export function ch2Set3v6(): void {
        let i2c_id = 40
        let dr10 = 0x2402
        pins.i2cWriteNumber(
            i2c_id,
            dr10,
            NumberFormat.UInt16LE,
            false
        )
        basic.pause(500);
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . # # . .
        # # # # #
        . # # . #
        # # # # #
        ` )
    }


    /**
    * To change ch2 voltage to 5V
    */
    //% block
    export function ch2Set5v(): void {
        let i2c_id = 40
        let dr11 = 0x3202
        pins.i2cWriteNumber(
            i2c_id,
            dr11,
            NumberFormat.UInt16LE,
            false
        )
        basic.pause(500);
        basic.pause(500)
        basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        . . . . #
        # # # # .
        ` )
    }


    /**
    * To change ch1 voltage to 3.6V
    */
    //% block
    export function ch1Set3v6(): void {
        let i2c_id = 40
        let dr1= 0x2400
        pins.i2cWriteNumber(
            i2c_id,
            dr1,
            NumberFormat.UInt16LE,
            false
        )
        basic.pause(500);
        basic.pause(500)
        basic.showLeds(`
        # # # # #
        . # # . .
        # # # # #
        . # # . #
        # # # # #
        ` )
    }

    /**
        * To change ch1 voltage to 5V
        */
    //% block
    export function ch1Set5v(): void {
        let i2c_id = 40
        let dr2 = 0x3200
        pins.i2cWriteNumber(
            i2c_id,
            dr2,
            NumberFormat.UInt16LE,
            false
        )
        basic.pause(500);
        basic.pause(500)
        basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        . . . . #
        # # # # .
        ` )
    }
}