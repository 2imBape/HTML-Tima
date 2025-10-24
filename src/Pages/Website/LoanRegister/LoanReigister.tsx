import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Slider,
  Typography,
} from "antd";
import React from "react";
import { FaRegIdCard } from "react-icons/fa";
import { IoIosCar } from "react-icons/io";
import { PiMapPinAreaFill } from "react-icons/pi";
import { SlScreenSmartphone } from "react-icons/sl";

const { Title, Text } = Typography;
const { Option } = Select;

const LoanReigister = () => {
  const [amount, setAmount] = React.useState<number>(50000000);
  const [months, setMonths] = React.useState<number>(1);
  const [repayType, setRepayType] = React.useState<"end" | "equal">("end");

  // ========== HÀM TÍNH ==========
  const interestRate = 0.009;
  const loanFee = 0.008;
  const assetFee = 0.008; // min 0.8%, bạn có thể set max = 0.026
  const monthlyRate = interestRate + loanFee + assetFee;

  const calcEndTerm = (amount: number, months: number) => {
    const monthlyPayment = amount * monthlyRate;
    const lastPayment = monthlyPayment + amount;
    return { monthlyPayment, lastPayment };
  };

  const calcEqualPrincipal = (amount: number, months: number) => {
    const monthlyPrincipal = amount / months;
    const monthlyPayment = monthlyPrincipal + amount * monthlyRate;
    return { monthlyPayment };
  };

  const result =
    repayType === "end"
      ? calcEndTerm(amount, months)
      : calcEqualPrincipal(amount, months);

  // ========== MARKS ==========
  const month = { 1: " ", 3: " ", 6: " ", 9: " ", 12: " " };
  const mark = {
    50000000: " ",
    400000000: " ",
    750000000: " ",
    1100000000: " ",
    1450000000: " ",
    1750000000: " ",
    2000000000: " ",
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 24,
      }}
    >
      <Row>
        <Col span={11}>
          <div>
            <Title
              level={2}
              style={{
                marginBottom: 14,
              }}
            >
              Bạn muốn vay bao nhiêu
            </Title>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>
                <b>Số tiền bạn cần vay**</b>
              </Text>
              <Text style={{ color: "#F04F39", fontSize: 20 }} strong>
                {amount.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </Text>
            </div>
          </div>
          <div>
            <Slider
              min={50000000}
              max={2000000000}
              marks={mark}
              step={null}
              value={amount}
              onChange={(value) => setAmount(value)}
            />
          </div>
          {repayType === "end" ? (
            ""
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 20,
                }}
              >
                <Text>
                  <b>Kỳ hạn vay</b>
                </Text>
                <Text style={{ color: "#f04f39", fontSize: 18 }}>
                  <b>{months} tháng</b>
                </Text>
              </div>
              <div>
                <Slider
                  min={1}
                  max={12}
                  marks={month}
                  step={null}
                  value={months}
                  onChange={(value) => setMonths(value)}
                />
              </div>
            </div>
          )}
          <div style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: 10, lineHeight: -1 }}>
              Lãi và chi phí vay nếu được quy đổi, trên dư nợ gốc ban đầu (lãi
              phẳng), sẽ tương đương từ 2.6% - 4.6%/tháng (32% - 55%/năm). Trong
              đó bao gồm:
              <br />
              Lãi 0.9%/tháng.
              <br />
              Chi phí vay: 1.6% - 3.4%/ tháng. Trong đó bao gồm:
              <br />
              Phí dịch vụ quản lý khoản vay 0.8%/tháng.
              <br />
              Phí dịch vụ quản lý tài sản từ 0.8% - 2.6%/tháng.
              <br />
              **F88 là hệ thống cầm đồ, hình thức vay là cầm cố tài sản.
            </Text>
          </div>
        </Col>
        <Col span={3} />
        <Col span={10} style={{ paddingTop: 100 }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <Button
                style={{
                  border: "none",
                  boxShadow: "none",
                  color: repayType === "end" ? "#f04f39" : "black",
                }}
                onClick={() => setRepayType("end")}
              >
                Trả gốc cuối kỳ (khuyên chọn)
              </Button>
              <Button
                style={{
                  border: "none",
                  boxShadow: "none",
                  color: repayType === "end" ? "black" : "#f04f39",
                }}
                onClick={() => setRepayType("equal")}
              >
                Trả gốc hàng kỳ
              </Button>
            </div>

            {/* TIỀN GÓP HÀNG THÁNG */}
            <div style={{ marginTop: 32, textAlign: "center" }}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "#f04f39" }}
              >
                {repayType === "end"
                  ? "Tiền lãi dự kiến phải trả hàng tháng"
                  : "Tiền góp hàng tháng"}
              </Text>
              <div
                style={{
                  color: "#F04F39",
                  fontSize: 40,
                  fontWeight: "bold",
                  marginTop: 8,
                  marginBottom: 4,
                }}
              >
                {repayType === "end"
                  ? result.monthlyPayment.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })
                  : result.monthlyPayment.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
              </div>
              <div style={{ fontSize: 12 }}>(Giá trị tham khảo)</div>

              <Button
                type="primary"
                style={{
                  width: "90%",
                  height: 50,
                  fontSize: 18,
                  marginTop: 16,
                  backgroundColor: "#F04F39",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Vay ngay
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Title level={2}>Thông tin đăng ký</Title>
        <Text>
          Vừa có tiền vừa có xe đi. Duyệt vay nhanh trong vòng 15 phút
        </Text>
        <Form layout="vertical">
          <Row gutter={40}>
            <Col span={12}>
              <Form.Item
                label={
                  <>
                    <SlScreenSmartphone
                      style={{ color: "#f88500", fontSize: 18, marginRight: 4 }}
                    />{" "}
                    <b>Số điện thoại</b>
                  </>
                }
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                  {
                    pattern: /^\+?[0-9]{10,10}$/,
                    message: "Vui lòng nhập đúng số điện thoại!",
                  },
                ]}
                required
              >
                <Input
                  style={{ width: 360, height: 45 }}
                  type="number"
                  placeholder="Số điện thoại"
                  required
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                style={{ marginTop: 3 }}
                label={
                  <>
                    {" "}
                    <IoIosCar
                      style={{ color: "#f88500", fontSize: 18, marginRight: 4 }}
                    />
                    <b>Hãng xe ô tô</b>
                  </>
                }
                required
              >
                <Select
                  placeholder="Hãng xe"
                  style={{ width: 350, height: 45, marginRight: 4 }}
                >
                  <Option value="toyota">Toyota</Option>
                  <Option value="honda">Honda</Option>
                  <Option value="ford">Ford</Option>
                  <Option value="bmw">BMW</Option>
                  <Option value="mercedes">Mercedes</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                style={{ marginTop: 3 }}
                label={
                  <>
                    <PiMapPinAreaFill
                      style={{ color: "#f88500", fontSize: 18, marginRight: 4 }}
                    />
                    <b>Tỉnh thành</b>
                  </>
                }
                required
              >
                <Select
                  placeholder="Tỉnh/thành"
                  style={{ width: 360, height: 45 }}
                >
                  <Option value="hn">Hà Nội</Option>
                  <Option value="hcm">Hồ Chí Minh</Option>
                  <Option value="dn">Đà Nẵng</Option>
                  <Option value="hp">Hải Phòng</Option>
                  <Option value="ct">Cần Thơ</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>                                                                                                                                                                                                
              <Form.Item
                style={{ marginTop: 3 }}
                label={
                  <>
                    {" "}
                    <IoIosCar
                      style={{ color: "#f88500", fontSize: 18, marginRight: 4 }}
                    />
                    <b>Dòng xe</b>
                  </>
                }
                required
              >
                <Select
                  placeholder="Dòng xe"
                  style={{ width: 350, height: 45 }}
                >
                  <Option value="vios">Vios</Option>
                  <Option value="city">City</Option>
                  <Option value="focus">Focus</Option>
                  <Option value="x5">X5</Option>
                  <Option value="glc">GLC</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={
                  <>
                    <FaRegIdCard
                      style={{ color: "#f88500", fontSize: 18, marginRight: 4 }}
                    />{" "}
                    <b>CCCD</b>
                  </>
                }
                required
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
                  style={{ width: 360, height: 45 }}
                  type="number"
                  placeholder="CCCD"
                  required
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button
                htmlType="submit"
                block
                style={{
                  width: 360,
                  height: 45,
                  fontSize: 18,
                  marginTop: 30,
                  color: "white",
                  backgroundColor: "#ef5121",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Vay ngay
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default LoanReigister;
