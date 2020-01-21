// Directions: Rewrite the imperative code below as Object-Oriented 

let status = 'active'
let warp = 2
let type = 'Dilithium Crystal'
let status_report = 'Captain, '

if(status === 'active' && warp <= 4) {
    status_report += 'the engines are active and we could be going faster.'
} else if (status === 'active' && warp > 4) {
    status_report += 'the engines are active and we are going ' + warp + '.'
} else if (status === 'down') {
    status_report += 'the engines are down.'
} else {
    status_report += 'the comms are down and we can`t reach engineering.'
}

console.log(status_report)

// Object-Oriented version
class WarpDrive {
    constructor(type) {
        this.type = type
        this.status = 'active'
        this.warp = 2
    }

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

let enterprise_warp = new WarpDrive('Dilithium Crystal')

enterprise_warp.set_warp(2)

enterprise_warp.status_report()

console.log(enterprise_warp.status_report()) 
// expected output: Captain, the engines are active and we could go faster.
