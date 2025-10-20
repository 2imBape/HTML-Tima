import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Slider,
  Typography,
} from "antd";
import React, { useState } from "react";

const { Title, Text } = Typography;
const { Option } = Select;

const LoanInformation: React.FC = () => {
  const [amount, setAmount] = useState<number>(50000000);

  const marks: Record<number, string> = {
    50000000: (amount) === 50000000? "50.000.000" : " ",
    300000000: (amount) === 300000000? "300.000.000" : " ",
    600000000: (amount) === 600000000? "600.000.000" : " ",
    1000000000: (amount) === 1000000000? "1 tỷ" : " ",
    1500000000: (amount) === 1500000000? "1 tỷ 5" : " ",
    2000000000: "2 tỷ",
  };

  const onFinish = (value: any) => {
    console.log("Form sumitted", { ...value, amount });
  };
  return (
    <div className="bg-[url(https://tima.vn/NewProduct/images/header-backgroud.png)] flex">
      <Col span={13}>
        <div className="flex justify-center pt-20">
          <img src="https://tima.vn/Template1/images/logo1.png" alt="" />
        </div>
        <div className="mt-20">
          <img src="	https://tima.vn/NewProduct/images/ANH_3.jpeg"  alt="" />
        </div>
      </Col>
      <Col span={10}>
        <div style={{ maxWidth: 600, marginTop: 30}}>
          <div
              style={{
                
                padding: "20px",
              }}
          >
            <Title
              level={3}
              style={{
                textAlign: "center",
                marginBottom: 24,
                color: "#4A4236",
              }}
            >
              THÔNG TIN ĐĂNG KÝ
            </Title>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item label={<b>Số tiền muốn vay?*</b>}>
                <div
                  style={{
                    marginBottom: 8,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Text strong>
                    Số tiền bạn cần
                    <span style={{ color: "#1C814E", textAlign: "left" }}>
                      {" "}
                      vay**
                    </span>
                  </Text>
                  <Text
                    style={{
                      color: "#0A7C46",
                      fontSize: 16,
                    }}
                    strong
                  >
                    {amount === 2000000000
                      ? "2 tỷ"
                      : amount?.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                  </Text>
                </div>
                <Slider
                style={{ marginLeft: 20 }}
                  marks={marks}
                  step={null}
                  min={50000000}
                  max={2000000000}
                  value={amount}
                  onChange={(amount) => setAmount(amount)}
                  tooltip={{
                    formatter: (amount) =>
                      amount !== undefined
                        ? amount.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })
                        : "",
                  }}
                />
              </Form.Item>

              <Text
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingBottom: "10px",
                }}
              >
                <b>Thông tin khách hàng*</b>
              </Text>
              <Row gutter={5}>
                <Col span={12}>
                  <Form.Item
                    name="fullName"
                    rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
                  >
                    <Input
                      placeholder="Họ và tên*"
                      style={{
                  color: 'white',                    
                        height: 45,
                      }}
                      required
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="phone"
                    rules={[
                      { required: true, message: "Vui lòng nhập số điện thoại" },
                      {
                        pattern: /^\+?[0-9]{10,10}$/,
                        message: "Vui lòng nhập đúng số điện thoại!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                  color: 'white',                    
                        height: 45,
                      }}
                      placeholder="Số điện thoại*"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="cccd"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số Căn cước Công dân",
                      },
                      {
                        pattern: /^\+?[0-9]{12,12}$/,
                        message: "Vui lòng nhập đúng số CCCD!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                  color: 'white',                    
                        height: 45,
                      }}
                      placeholder="Số Căn cước Công dân*"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col span={14}>
                  <Form.Item>
                    <Select
                      style={{
                        height: 45,
                  color: 'white',                    
                      }}
                      placeholder="Tỉnh thành sinh sống"
                      aria-required
                    >
                      <Option value="Hà Nội">Hà Nội</Option>
                      <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                      <Option value="Đà Nẵng">Đà Nẵng</Option>
                      <Option value="Hải Phòng">Hải Phòng</Option>
                      <Option value="Cần Thơ">Cần Thơ</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Form.Item>
                    <Select style={{ height: 45 }} placeholder="Quận/ Huyện">
                      <Option value="Quận Đống Đa">Đống Đa</Option>
                      <Option value="Quận Ba Đình">Ba Đình</Option>
                      <Option value="Quận Hoàn Kiếm">Hoàn Kiếm</Option>
                      <Option value="Quận Tây Hồ">Tây Hồ</Option>
                      <Option value="Quận Long Biên">Long Biên</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Text
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingBottom: "10px",
                }}
              >
                <b>Thông tin phương tiện chính phủ*</b>
              </Text>
              <Row gutter={5}>
                <Col span={8}>
                  <Form.Item>
                    <Select style={{ height: 45 }} placeholder="Hãng xe">
                      <Option value="Toyota">Toyota</Option>
                      <Option value="Honda">Honda</Option>
                      <Option value="Ford">Ford</Option>
                      <Option value="Chevrolet">Chevrolet</Option>
                      <Option value="Hyundai">Hyundai</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item>
                    <Select style={{ height: 45 }} placeholder="Loại xe">
                      <Option value="Xe 4 chỗ">Xe 4 chỗ</Option>
                      <Option value="Xe 7 chỗ">Xe 7 chỗ</Option>
                      <Option value="Xe bán tải">Xe bán tải</Option>
                      <Option value="Xe tải">Xe tải</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item>
                    <Select style={{ height: 45 }} placeholder="Năm sản xuất">
                      <Option value="2023">2024</Option>
                      <Option value="2022">2023</Option>
                      <Option value="2021">2022</Option>
                      <Option value="2020">2021</Option>
                      <Option value="2019">2010</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="checked"
                valuePropName="checked"
                style={{ display: "flex", justifyContent: "center" }}
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject("Bạn phải đồng ý điều khoản"),
                  },
                ]}
              >
                <Checkbox>Tôi đồng ý với điều khoản và điều kiện của Tima</Checkbox>
              </Form.Item>
            <Button
                htmlType="submit"
                block
                style={{
                    
                    marginLeft: 170,        
                  backgroundColor: "#F05D29",
                  color: 'white',              
                  height: 45,
                  width: 150,
                  borderRadius: 40,
                  border: "none",
                }}
              >
                Phê duyệt ngay
              </Button>
            </Form>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default LoanInformation;
