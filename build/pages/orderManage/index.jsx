/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import {
  Input,
  Button,
  Table,
  Menu,
  Dropdown,
  Tabs,
} from 'antd';
import { useHistory } from 'react-router-dom';

import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import moment from 'moment';
import OrderStore from '@/stores/orderStore';

import InnerPageHead from '@/components/InnerPageHead';
import './style.less';

const { TabPane } = Tabs;

const OrderManage = () => {
  const {
    orderList, getOrderList, pagenation, setOrderDetail,
  } = useContext(OrderStore);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [currentUid, setCurrentUid] = useState('');

  const [currentOrderId, setCurrentOrderId] = useState('');
  const [currentPages, setCurrentPages] = useState(1);

  // tab页面
  const [currentTabs, setCurrentTabs] = useState(1);
  const history = useHistory();

  /**
   * 分页获取主播列表
   * @param {*} page
   * @param {*} page_size
   * @param {*} search
   */
  const getOrderListAsync = async (page = 1, page_size = 10, search = {}) => {
    await getOrderList({
      page,
      page_size,
      search,
    });
  };

  const onSearchUid = async () => {
    setCurrentPages(1);
    await getOrderListAsync(1, 10, {
      tiktok_uid: currentUid,
    });
  };

  const onSearchOrder = async () => {
    setCurrentPages(1);
    await getOrderListAsync(1, 10, {
      tiktok_order_id: currentOrderId,
    });
  };

  const onReset = () => {
    setCurrentPages(1);
    setCurrentUid('');
    getOrderListAsync();
  };

  const onReset1 = () => {
    setCurrentPages(1);
    setCurrentOrderId('');
    getOrderListAsync();
  };

  const menu = (record) => (
    <Menu style={{ width: '120px', textAlign: 'center', overflow: 'hidden' }}>
      <Menu.Item
        style={{ width: '100%' }}
        onClick={() => {
          console.log(record);
          console.log('输入物流单号');
        }}
      >
        <span>
          输入物流单号
        </span>
      </Menu.Item>
      <Menu.Item
        style={{ width: '100%' }}
        onClick={() => {
          console.log('退货');
        }}
      >
        <span>
          退货
        </span>
      </Menu.Item>
      <Menu.Item
        style={{ width: '100%' }}
        onClick={() => {
          // console.log('查看详情');
          setOrderDetail(record);
          history.push('/detailOrder');
        }}
      >
        <span>
          查看详情
        </span>
      </Menu.Item>

    </Menu>
  );

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectKeys, selectedRows) => {
      setSelectedRowKeys(selectKeys);
      // setPartProduct(toJS(selectedRows));
      console.log(selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.disabled,
    }),
  };

  const anchorColmns = [
    {
      title: '抖音uid',
      dataIndex: 'tiktok_uid',
      key: '1',
      width: 113,
    },
    {
      title: '订单号',
      dataIndex: 'tiktok_order_id',
      key: '2',
      width: 130,
    },
    {
      title: '商品信息',
      dataIndex: 'product_name',
      key: '3',
      width: 230,
      // ellipsis: true,
    },
    {
      title: '订单金额',
      dataIndex: 'total_amount',
      key: '4',
      width: 130,
      render: (text) => (
        <span>¥ {text}</span>
      ),
    },
    {
      title: '佣金比例',
      dataIndex: 'bonus_rate',
      key: '5',
      width: 91,
    },
    {
      title: '佣金',
      dataIndex: 'bonus',
      key: '6',
      width: 91,
    },
    {
      title: '二级佣金比例',
      dataIndex: 'sec_bonus_rate',
      key: '7',
      width: 130,
    },
    {
      title: '二级佣金',
      dataIndex: 'sec_bonus',
      key: '8',
      width: 91,
    },
    {
      title: '团队长佣金比例',
      dataIndex: 'trd_bonus_rate',
      key: '9',
      width: 140,
    },
    {
      title: '团队长佣金',
      dataIndex: 'trd_bonus',
      key: '10',
      width: 130,
    },
    {
      title: '订单状态',
      dataIndex: 'status_msg',
      key: '11',
      width: 115,
    },
    {
      title: '佣金状态',
      dataIndex: '',
      key: '12',
      width: 115,
    },
    {
      title: '结算时间',
      dataIndex: 'create_at',
      key: '13',
      width: 175,
      render: (text) => (
        <span>{moment((text * 1000)).format('YYYY-MM-DD HH:mm:ss')}</span>
      ),
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (record) => (
        <Dropdown overlay={() => menu(record)}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            菜单
          </a>
        </Dropdown>
      ),
    },
  ];

  /**
   * 选择页
   * @param {*} e
   */
  const changePagination = (e) => {
    setCurrentPages(e.current);
    const obj = {};
    if (currentUid) {
      obj.tiktok_uid = currentUid;
    }
    if (currentOrderId) {
      obj.tiktok_order_id = currentOrderId;
    }
    getOrderListAsync(e.current, e.pageSize, obj);
  };
  // tab切换
  const tabsChange = (key) => {
    // console.log('tab切换', key);
    setCurrentTabs(key);
  };

  useEffect(() => {
    getOrderListAsync();
  }, []);

  return (
    <div className="order-manage">
      <InnerPageHead
        className="list-head"
        title="订单管理"
      // hasActive
      />

      <div className="list-content">
        <div className="list-content-inner">
          <Tabs defaultActiveKey={currentTabs} onChange={tabsChange}>
            <TabPane tab="抖音订单" key="1" />
            <TabPane tab="平台订单" key="2" />
          </Tabs>
          <div className="inner-wrap">
            <div className="inner-wrap-head">
              <div className="head-item">
                <span>抖音uid：</span>
                <Input
                  style={{ width: '250px' }}
                  value={currentUid}
                  onChange={(e) => {
                    setCurrentUid(e.target.value);
                  }}
                />
                <Button className="search-btn" type="primary" onClick={onSearchUid}>
                  查询
                </Button>
                <Button className="reset-btn" onClick={onReset}>
                  重置
                </Button>
              </div>
              <div className="head-item">
                <span>订单号：</span>
                <Input
                  style={{ width: '250px' }}
                  value={currentOrderId}
                  onChange={(e) => {
                    setCurrentOrderId(e.target.value);
                  }}
                />
                <Button className="search-btn" type="primary" onClick={onSearchOrder}>
                  查询
                </Button>
                <Button className="reset-btn" onClick={onReset1}>
                  重置
                </Button>
              </div>
            </div>
            <div className="inner-wrap-content">
              <Table
                rowKey={(row) => row.order_id}
                columns={anchorColmns}
                dataSource={orderList}
                rowSelection={rowSelection}
                scroll={{ y: '100%', x: '100%' }}
                pagination={{
                  current: currentPages,
                  position: ['none', 'bottomRight'],
                  total: toJS(pagenation).total,
                  // pageSize: pagenation.page_size,
                  defaultCurrent: 1,
                  pageSizeOptions: [10, 20, 50, 100],
                }}
                onChange={changePagination}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default observer(OrderManage);
