var carforme = {
    compact: function(ary) {
        return ary.filter(it => it)
    },
    fill: function(array, value, start = 0, end = array.length) {
        for (i = start; i < end; i++) {
            array[i] = value
        }
        return array
    },
    /** flattenDeep: function(array) {
        return array.reduce((result, item) => {
            if (array.isArray(item)) {
                result.push(...carforme.flattenDeep(item))
            } else {
                result.push(item)
            }
            return result
        }, [])
    },**/
    isArray: function(array) {
        return Object.prototype.toString.call(array) === '[object Array]'
    },
    chunk: function(array, size = 1) {
        var result = [],
            level = [],
            j = 0;
        for (i = 0; i < array.length; i++) {
            level.push(array[i]);
            j++;
            if (j >= size) {
                j = 0;
                result.push(level)
                level = []
            }
        }
        if (j != 0) {
            result.push(level)
        }
        return result

    },
    difference: function(array, ...values) {
        var result = [];
        var flag = true;
        var values = array.concat(...values)
        if (!values) {
            return array
        } else {
            for (var i = 0; i < array.length; i++) {
                for (var j = array.length; j < values.length; j++) {
                    if (array[i] == values[j]) {
                        var flag = false
                    }
                }
                if (flag) {
                    result.push(array[i])
                }
                flag = true;
            }
        }
        return result
    },
    drop: function(array, n = 1) {
        return array.slice(n)
    },
    droprRight: function(array, n = 1) {
        if (array.length < n) {
            return []
        }
        return array.slice(0, array.length - n)

    },
    join: function(array, separator = ',') {
        var sum = '';
        for (i = 0; i < array.length - 1; i++) {
            sum = sum + String(array[i]) + separator;
        }
        return sum + String(array[i])

    }




}