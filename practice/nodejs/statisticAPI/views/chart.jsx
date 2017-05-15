import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { 
    Layout, 
    Menu, 
    Breadcrumb, 
    Row, 
    Col,
    Select,
    DatePicker,
    Cascader
 } from 'antd'

const { Header, Content, Footer } = Layout
const { Option } = Select
const { RangePicker } = DatePicker

const cascaderData = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}]

export default class Chart extends Component {
    constructor(props){
        super(props)
        this.state = {
            cascaderData: cascaderData
        }
    }
    componentDidMount(){
         var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    // 时间变化
    dateOnChange() {

    }
    // 版本变化
    selectOnchange() {

    }
    render() {
        const { cascaderData } = this.state
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo">JSBrige API 统计</div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1"><Link to='/' >首页</Link></Menu.Item>
                            <Menu.Item key="2"><Link to='/index'>粗糙的数据</Link></Menu.Item>
                            <Menu.Item key="3"><Link to='chart'>图表</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '24px 50px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <Row>
                                <Col span={2}>
                                    jsBrige 类型
                                </Col>
                                <Col span={4}>
                                    {/*<Select style={{ width: '30%' }} defaultValue="Home">
                                        <Option value="Home">Home</Option>
                                        <Option value="Company">Company</Option>
                                    </Select>*/}
                                    <Cascader style={{width: '80%'}} options={cascaderData} onChange={this.selectOnChange} placeholder="Please select jsbrige & version" />
                                </Col>
                                <Col span={2}>
                                    项目更新时间
                                </Col>
                                <Col span={4}>
                                    <RangePicker ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }} onChange={this.dateOnChange.bind(this)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <div id="main" style={{width: '600px', height: '400px'}}></div>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Lee.Genffy &copy; {moment().format('YYYY')}</Footer>
                </Layout>
            </div>
        )
    }
}