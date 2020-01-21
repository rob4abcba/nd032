// Object-Oriented version
// Class – An abstraction or template from which objects are created
class WarpDrive {  
    constructor(type) {
        // Attribute – A variable defined in a class or object. Also called fields, members, or class variables.
        this.type = type
        this.status = 'active'
        this.warp = 2
    }

    // Method – A function inside a class or object.
    status_report() {
        if (this.status === 'active' && this.warp <= 4) {
            return 'Captain, the engines are active and we could be going faster.'
        } else if (this.status === 'active' && this.warp > 4) {
            return 'Captain, the engines are active and we are going ' + this.warp + '.'
        } else if (this.status === 'down') {
            return 'Captain, the engines are down.'
        } else {
            return 'Captain, the comms are down and we can`t reach engineering.'
        }
    }

    set_status(status) {
        this.status = status
    }

    set_warp(integer) {
        this.warp = integer
    }
}

// Instantiation – Creating an object based on a class.
let enterprise_warp = new WarpDrive('Dilithium Crystal')

enterprise_warp.set_warp(2)

enterprise_warp.status_report()

console.log(enterprise_warp.status_report()) 
// expected output: Captain, the engines are active and we could go faster.