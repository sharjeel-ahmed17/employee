import { Tree } from 'react-tree-graph';

import { AnimatedTree } from 'react-tree-graph'
const TreeGraph = () => {

    const data = {
        name: 'Parent',
        children: [{
            name: 'Child One'
        },
        {
            name: 'Child 2'
        },
        {
            name: 'Child 3',
            children: [
                {
                    name: 'Grand Child 1',

                },
                {
                    name: 'Grand Child 2',

                },

            ]
        },
        {
            name: 'Child 4'
        },
        {
            name: 'Child 5'
        },
        {
            name: 'Child 6'
        },
        {
            name: 'Child 7'
        },
        ]
    };
    return (
        <>
            <Tree
                data={data}
                height={400}
                width={400} />

            <AnimatedTree
                data={data}
                height={400}
                width={400} />
        </>
    )
}

export default TreeGraph