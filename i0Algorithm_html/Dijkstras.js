var Dijkstras = (function () {

    var Dijkstras = function () {
        this.graph = [];
        this.queue;
        this.distance = [];
        this.previous = []
    }


    Dijkstras.prototype.settingGraph = function (graph)
    {
        // Error check graph
        if (typeof graph !== 'object') {
            throw "graph isn't an object (" + typeof graph + ")";
        }

        if (graph.length < 1) {
            throw "graph is empty";
        }

        for (var index in graph) {
            // Error check each node
            var node = graph[index];
            if (typeof node !== 'object' || node.length !== 2) {
                throw "node must be an array and contain 2 values (name, vertices). Failed at index: " + index;
            }

            var nodeName = node[0];
            var vertices = node[1];
            this.graph[nodeName] = [];

            for (var v in vertices) {
                // Error check each node
                var vertex = vertices[v];
                if (typeof vertex !== 'object' || vertex.length !== 2) {
                    throw "vertex must be an array and contain 2 values (name, vertices). Failed at index: " + index + "[" + v + "]" ;
                }
                var vertexName = vertex[0];
                var vertexCost = vertex[1];
                this.graph[nodeName][vertexName] = vertexCost;
            }
        }
    }

    // Reference：https://www.jianshu.com/p/121cbe699478
    var MyMinHeap = (function() {
        var MyMinHeap = function () {
            this.min = null;
            this.roots = [];
            this.nodes = [];
        }

          MyMinHeap.prototype.add = function(node, distance)
        {
            // Add the node
            this.nodes[node] = {
                node: node,
                distance: distance,
                depth: 0,
                parent: null,
                children: []
            };

            // Is it the minimum?
            if (!this.min || distance < this.nodes[this.min].distance) {
                this.min = node;
            }

            // Other stuff
            this.roots.push(node);
        }

        MyMinHeap.prototype.update = function(node, distance)
        {
            this.remove(node);
            this.add(node, distance);
        }

        MyMinHeap.prototype.remove = function(node)
        {
            if (!this.nodes[node]) {
                return;
            }

            // Move children to be children of the parent
            var numChildren = this.nodes[node].children.length;
            if (numChildren > 0) {
                for (var i = 0; i < numChildren; i++) {
                    var child = this.nodes[node].children[i];
                    this.nodes[child].parent = this.nodes[node].parent;

                    // No parent, then add to roots
                    if (this.nodes[child].parent == null) {
                        this.roots.push(child);
                    }
                }
            }

            var parent = this.nodes[node].parent;

            // Root, so remove from roots
            if (parent == null) {
                var pos = this.roots.indexOf(node);
                if (pos > -1) {
                    this.roots.splice(pos, 1);
                }
            } else {
                // Go up the parents and decrease their depth
                while (parent) {
                    this.nodes[parent].depth--;
                    parent = this.nodes[parent].parent
                }
            }
        }


        MyMinHeap.prototype.getDistance = function(node)
        {
            if (this.nodes[node]) {
                return this.nodes[node].distance;
            }
            return Infinity;
        }
    return MyMinHeap;
    })();



    return Dijkstras;
})();
