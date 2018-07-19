
var deviceType = 'Hub';
        var obj = {
        deviceType: 'Switch',
        prop: {
            deviceType: 'Router',
            getDeviceType: function() {
                console.log(this.deviceType);
                return this.deviceType;

            }
        }
        };


        console.log(obj.prop.getDeviceType());
        var test = obj.prop.getDeviceType;
        console.log(test());
