import { useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  ReactFlowProvider,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '0', data: { label: 'Tech' }, position: { x: 0, y: 0 }, type: 'input' },

  // Languages
  { id: '1', data: { label: 'Languages' }, position: { x: -300, y: 100 } },
  { id: '1-1', data: { label: 'Python' }, position: { x: -400, y: 200 } },
  { id: '1-2', data: { label: 'Java' }, position: { x: -300, y: 200 } },
  { id: '1-3', data: { label: 'Javascript' }, position: { x: -200, y: 200 } },

  // UI/UX
  // { id: '2', data: { label: 'UI/UX' }, position: { x: -50, y: 100 } },
  // { id: '2-1', data: { label: 'Dart' }, position: { x: -80, y: 200 } },
  // { id: '2-2', data: { label: 'Libraries' }, position: { x: -20, y: 200 } },
  // { id: '2-3', data: { label: 'Design Tools' }, position: { x: 0, y: 300 } },
  // { id: '2-4', data: { label: 'Figma' }, position: { x: -60, y: 400 } },
  // { id: '2-5', data: { label: 'Canva' }, position: { x: 0, y: 400 } },
  // { id: '2-6', data: { label: 'Nicepage' }, position: { x: 60, y: 400 } },

  // DevOps
  // { id: '3', data: { label: 'DevOps' }, position: { x: 200, y: 100 } },
  // { id: '3-1', data: { label: 'Git' }, position: { x: 180, y: 200 } },
  // { id: '3-2', data: { label: 'Docker' }, position: { x: 220, y: 200 } },

  // Version Control / Containerization
  // { id: '4', data: { label: 'Version Control' }, position: { x: 130, y: 300 } },
  // { id: '5', data: { label: 'Containerization' }, position: { x: 270, y: 300 } },

  // Cloud
  // { id: '6', data: { label: 'Cloud' }, position: { x: 450, y: 100 } },
  // { id: '6-1', data: { label: 'AWS' }, position: { x: 400, y: 200 } },
  // { id: '6-2', data: { label: 'GCP' }, position: { x: 500, y: 200 } },
  // { id: '6-3', data: { label: 'Load Balancer' }, position: { x: 350, y: 300 } },
  // { id: '6-4', data: { label: 'S3' }, position: { x: 400, y: 300 } },
  // { id: '6-5', data: { label: 'EC2' }, position: { x: 450, y: 300 } },
  // { id: '6-6', data: { label: 'Elastic Beanstalk' }, position: { x: 500, y: 300 } },
  // { id: '6-7', data: { label: 'Google Cloud Platform' }, position: { x: 550, y: 300 } },

  // Web & Frameworks
  { id: '7', data: { label: 'Frameworks & Libraries' }, position: { x: -450, y: 100 } },
  { id: '7-1', data: { label: 'Web' }, position: { x: -600, y: 200 } },
  { id: '7-2', data: { label: 'Backend' }, position: { x: -450, y: 200 } },
  // { id: '7-3', data: { label: 'Node.js' }, position: { x: -650, y: 300 } },
  { id: '7-4', data: { label: 'React' }, position: { x: -550, y: 300 } },
  // { id: '7-5', data: { label: 'Streamlit' }, position: { x: -500, y: 300 } },
  // { id: '7-6', data: { label: 'Django' }, position: { x: -450, y: 300 } },
  // { id: '7-7', data: { label: 'Flask' }, position: { x: -400, y: 300 } },
  // { id: '7-8', data: { label: 'FastAPI' }, position: { x: -350, y: 300 } },
  // { id: '7-9', data: { label: 'Google APIs' }, position: { x: -300, y: 300 } },

  // AI/ML
  { id: '8', data: { label: 'AI / ML / Data Science' }, position: { x: 0, y: 500 } },
  { id: '8-1', data: { label: 'Matlab' }, position: { x: -100, y: 600 } },
  { id: '8-2', data: { label: 'Libraries' }, position: { x: 0, y: 600 } },
  { id: '8-3', data: { label: 'Others' }, position: { x: 100, y: 600 } },
  { id: '8-4', data: { label: 'Pandas' }, position: { x: -50, y: 700 } },
  { id: '8-5', data: { label: 'NumPy' }, position: { x: 0, y: 700 } },
  { id: '8-6', data: { label: 'Scikit-Learn' }, position: { x: 50, y: 700 } },
  { id: '8-7', data: { label: 'TensorFlow' }, position: { x: 100, y: 700 } },
  // { id: '8-8', data: { label: 'PyTorch' }, position: { x: 150, y: 700 } },
  // { id: '8-9', data: { label: 'Langchain' }, position: { x: 200, y: 700 } },
  // { id: '8-10', data: { label: 'Visualization' }, position: { x: 250, y: 700 } },
  // { id: '8-11', data: { label: 'Plotly' }, position: { x: 300, y: 800 } },
  { id: '8-12', data: { label: 'Matplotlib' }, position: { x: -100, y: 700 } },
  { id: '8-13', data: { label: 'Seaborn' }, position: { x: -200, y: 700 } },
];

const initialEdges = [
  { id: 'e0-1', source: '0', target: '1' },
  { id: 'e0-2', source: '0', target: '2' },
  { id: 'e0-3', source: '0', target: '3' },
  { id: 'e0-6', source: '0', target: '6' },
  { id: 'e0-7', source: '0', target: '7' },
  { id: 'e0-8', source: '0', target: '8' },

  // More sub-edges (grouped relationships)
  { id: 'e1-1', source: '1', target: '1-1' },
  { id: 'e1-2', source: '1', target: '1-2' },
  { id: 'e1-3', source: '1', target: '1-3' },
  { id: 'e1-4', source: '1', target: '1-4' },

  { id: 'e2-1', source: '2', target: '2-1' },
  { id: 'e2-2', source: '2', target: '2-2' },
  { id: 'e2-3', source: '2', target: '2-3' },
  { id: 'e2-4', source: '2-3', target: '2-4' },
  { id: 'e2-5', source: '2-3', target: '2-5' },
  { id: 'e2-6', source: '2-3', target: '2-6' },

  { id: 'e3-1', source: '3', target: '3-1' },
  { id: 'e3-2', source: '3', target: '3-2' },
  { id: 'e3-3', source: '3-1', target: '4' },
  { id: 'e3-4', source: '3-2', target: '5' },

  { id: 'e6-1', source: '6', target: '6-1' },
  { id: 'e6-2', source: '6', target: '6-2' },
  { id: 'e6-3', source: '6-1', target: '6-3' },
  { id: 'e6-4', source: '6-1', target: '6-4' },
  { id: 'e6-5', source: '6-1', target: '6-5' },
  { id: 'e6-6', source: '6-1', target: '6-6' },
  { id: 'e6-7', source: '6-2', target: '6-7' },

  { id: 'e7-1', source: '7', target: '7-1' },
  { id: 'e7-2', source: '7', target: '7-2' },
  { id: 'e7-3', source: '7-1', target: '7-3' },
  { id: 'e7-4', source: '7-1', target: '7-4' },
  { id: 'e7-5', source: '7-1', target: '7-5' },
  { id: 'e7-6', source: '7-2', target: '7-6' },
  { id: 'e7-7', source: '7-2', target: '7-7' },
  { id: 'e7-8', source: '7-2', target: '7-8' },
  { id: 'e7-9', source: '7-2', target: '7-9' },

  { id: 'e8-1', source: '8', target: '8-1' },
  { id: 'e8-2', source: '8', target: '8-2' },
  { id: 'e8-3', source: '8', target: '8-3' },
  { id: 'e8-4', source: '8-2', target: '8-4' },
  { id: 'e8-5', source: '8-2', target: '8-5' },
  { id: 'e8-6', source: '8-2', target: '8-6' },
  { id: 'e8-7', source: '8-2', target: '8-7' },
  { id: 'e8-8', source: '8-2', target: '8-8' },
  { id: 'e8-9', source: '8-3', target: '8-9' },
  { id: 'e8-10', source: '8-3', target: '8-10' },
  { id: 'e8-11', source: '8-2', target: '8-11' },
  { id: 'e8-12', source: '8-1', target: '8-12' },
  { id: 'e8-13', source: '8-1', target: '8-13' },
];

const FlowContent = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const { fitView } = useReactFlow();

  useEffect(() => {
    fitView({ padding: 0.2 });
  }, [fitView]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

function SkillsFlow() {

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlowProvider>
        <FlowContent />
      </ReactFlowProvider>
    </div>
  );
};
export default SkillsFlow;