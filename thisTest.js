
var deviceType = 'Hub';
        var obj = {
        deviceType: 'Switch',
        prop: {
            deviceType: 'Router',
            getDeviceType: function() {
                return this.deviceType;
            }
        }
        };


        console.log(obj.prop.getDeviceType());
        var test = obj.prop.getDeviceType;
        console.log(test());
