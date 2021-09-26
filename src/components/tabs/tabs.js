import React from 'react';

function Tabs({ children }) {
	return <div className='tabs'>{children}</div>;
}

function Tab({ value, onTabChange, current, children }) {
	const active = value === current;
	return (
		<div onClick={() => onTabChange(value)} className={`tab ${active ? 'active' : ''}`}>
			{children}
		</div>
	);
}
function TabPanel({ value, current, children }) {
	const active = value === current;

	if (!active) return null;
	return children;
}

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;
