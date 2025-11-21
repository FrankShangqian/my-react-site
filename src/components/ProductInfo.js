import React, { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = ({ onOpenBrochure }) => {
  const features = [
    { icon: '🧠', title: '一键测量与扫描', description: '一键测量、一键扫描，操作简单、效率更高' },
    { icon: '🔌', title: '多仪器接入', description: '支持全站仪、南方等多种设备与接口接入' },
    { icon: '🛰️', title: '自主导航与回充', description: '具备自主导航与自动对接充电功能，降低运维成本' },
    { icon: '⚖️', title: '自动调平', description: '设备自动找平，减少人为误差，快速投入作业' },
    { icon: '☁️', title: '实时上传与分析', description: '数据实时回传云端，支持结果快速分析与共享' },
    { icon: '🛡️', title: '安全可靠', description: '防护等级IP67，支持涉水作业，保障施工安全' },
    { icon: '👤', title: '1人1机', description: '单人即可完成部署与操作，降低人力投入' },
    { icon: '🎯', title: '毫米级精度', description: '先进算法与传感器融合，提供高精度量测结果' }
  ];

  const specifications = [
    { label: '防护等级', value: 'IP67' },
    { label: '运行速度', value: '≤1 m/s' },
    { label: '越障能力', value: '12 cm' },
    { label: '涉水深度', value: '40 cm' },
    { label: '续航时间', value: '5 h' },
    { label: '爬坡能力', value: '30°' },
    { label: '工作温度', value: '-20°C ~ 50°C' },
    { label: '通信方式', value: '无线 Wi‑Fi / 4G' },
    { label: '遥控距离', value: '≈60 m' },
    { label: '补光距离', value: '≥45 m' },
    { label: '外形尺寸', value: '1200 × 730 × 1010 mm（二代）' },
    { label: '整机重量', value: '约 170 kg（二代）' }
  ];

  const [showImage, setShowImage] = useState(true);
  const [imageSrc, setImageSrc] = useState('/robot-cover.jpg');

  const handleImageError = () => {
    setShowImage(false);
  };

  // 点击按钮在应用内切换到“宣传册”页
  const handleOpenBrochure = () => {
    if (typeof onOpenBrochure === 'function') {
      onOpenBrochure();
    }
  };

  return (
    <div className="product-info">
      <div className="hero-section">
        <h2>隧道综合量测机器人</h2>
        <p className="hero-description">
          隧道综合量测机器人集成高精度全站仪与多传感器，支持一键测量与扫描、
          自主导航、自动调平与实时上传分析，适用于隧道开挖面与结构状态的快速、
          安全、精准量测，显著降低人力投入并提升作业效率。
        </p>
        {showImage && (
          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src={imageSrc}
                alt="隧道综合量测机器人正视图"
                loading="lazy"
                onError={handleImageError}
              />
            </div>
            <p className="image-caption">隧道综合量测机器人（示意图）</p>
          </div>
        )}
      </div>

      <div className="features-section">
        <h3>核心特性</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="specifications-section">
        <h3>技术规格</h3>
        <div className="specs-grid">
          {specifications.map((spec, index) => (
            <div key={index} className="spec-item">
              <span className="spec-label">{spec.label}</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h3>立即体验</h3>
        <p>查看完整的产品宣传册，了解更多技术细节和应用案例</p>
        <button className="cta-button" onClick={handleOpenBrochure}>
          <span>📄</span>
          查看宣传册
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
