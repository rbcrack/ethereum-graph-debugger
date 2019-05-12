import React from 'react';

import TransactionDebugger from '../../TransactionDebugger/TransactionDebugger';
import Disassembler from '../../Disassembler/Disassembler';
import ControlFlowGraph from '../../ControlFlowGraph/ControlFlowGraph';
import StorageViewer from '../../StorageViewer/StorageViewer';

import styles from './InnerTabPanel.scss';

import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const InnerTabPanel = ({ type, active, contractName, contractCode, contractPath, debuggerResponse, graphResponse, disassemblerResponse, storageResponse }) => {
  const tabPanelClasses = cx({
    'inner-tab-panel': true,
    'inner-tab-panel--active': !!active,
  });

  return (
    <div className={tabPanelClasses}>
      {type === 'Transaction Debugger' && 
        <TransactionDebugger 
          contractPath={contractPath} 
          contractName={contractName} 
          debuggerResponse={debuggerResponse}
        />
      }
      {type === 'Disassembler' && 
        <Disassembler
          disassemblerResponse={disassemblerResponse}
        />
      }
      {type === 'Control Flow Graph' &&
        <ControlFlowGraph 
          contractPath={contractPath} 
          contractName={contractName} 
          contractCode={contractCode}
          graphResponse={graphResponse}
        />
      }
      {type === 'Storage Viewer' &&
        <StorageViewer storageResponse={storageResponse} />
      }
    </div>
  );
}

InnerTabPanel.displayName = 'InnerTabPanel';

export default InnerTabPanel;
