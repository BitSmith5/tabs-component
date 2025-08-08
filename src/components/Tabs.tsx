import { useState } from 'react';
import '../styles/Tabs.css';

const tabList = [
  { id: 'tab1', label: 'Tab 1' },
  { id: 'tab2', label: 'Tab 2' },
  { id: 'tab3', label: 'Tab 3' },
  { id: 'tab4', label: 'Tab 4' },
  { id: 'tab5', label: 'Tab 5' },
];

export function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="panel">
      <div className="tabs">
        {tabList.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'tab-active' : 'tab-inactive'}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabList.map((tab) => (
          activeTab === tab.id && <div>{`Content for ${tab.label}`}</div>
        ))}
      </div>
    </div>
  );
}