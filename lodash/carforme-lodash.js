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
    flattenDeep: function(array) {
        return array.reduce((result, item) => {
            if (Array.isArray(item)) {
                result.push(...flattenDeep(item))
            } else {
                result.push(item)
            }
            return result
        }, [])
    },
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

    },
    head: function(array) {
        if (array[0]) {
            return array[0]
        }
    },
    indexOf: function(array, value, fromIndex = 0) {
        for (var i = fromIndex; i < array.length; i++) {
            if (array[i] == value) {
                return i
            }
        }
        return -1
    },
    lastIndexOf: function(array, value, fromIndex = array.length - 1) {
        for (var i = fromIndex; i >= 0; i--) {
            if (array[i] == value) {
                return i
            }
        }
        return -1
    },
    initial: function(array) {
        return array.slice(0, array.length - 1)
    },
    pull: function(array, ...values) {
        for (var i = 1; i < arguments.length; i++) {
            array.forEach((element, index) => {
                if (element == arguments[i]) {
                    array.splice(index, 1)
                }
            })
        }
        return array
    },
    reverse: function(array) {
        var result = []
        array.forEach((element, index) => {
            result[array.length - 1 - index] = element
        })
        return result
    },
    sortedIndex: function(array, value) {
        if (value <= array[0] || value >= array[array.length - 1]) {
            return value <= array[0] ? 0 : array.length
        }
        var start = 0,
            last = array.length - 1;
        while (last > start) {
            mid = Math.floor((start + last) / 2)
            if (array[mid] < value && value <= array[mid + 1]) {
                return mid + 1
            }
            if (array[mid] < value) {
                start = mid
            } else {
                last = mid
            }
        }
    },


}