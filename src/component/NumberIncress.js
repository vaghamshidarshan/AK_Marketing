import React, { useEffect, useRef } from 'react';
import './NumberIncress.css';

const CountUp = ({ endValue }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const el = numberRef.current;

    const countDecimals = (val) => {
      if (Math.floor(val) === val) return 0;
      return val.toString().split(".")[1]?.length || 0;
    };

    const formatNumber = (val, decimals) => {
      return val.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });
    };

    const easeOutQuint = (x) => {
      return 1 - Math.pow(1 - x, 5);
    };

    const iterateValue = (el, end, decimals) => {
      const start = 0;
      const duration = 2500;
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsedPercent = (timestamp - startTimestamp) / duration;
        const easedProgress = Math.min(easeOutQuint(elapsedPercent), 1);
        let interimNumber = Math.abs(easedProgress * (end - start) + start);
        el.innerHTML = formatNumber(interimNumber, decimals);
        if (easedProgress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const end = parseFloat(endValue.replace(/,/g, ""));
    const decimals = countDecimals(end);

    const observerOptions = { root: null, rootMargin: "0px 0px", threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          iterateValue(entry.target, end, decimals);
        }
      });
    }, observerOptions);

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [endValue]);

  return (
    <span ref={numberRef} data-countup-number={endValue}>
      {endValue}
    </span>
  );
};

const NumberIncress = () => {
  return (
    <div className='numbers'>
    <article className="grid flow mb-10vh w-55">
      <div className="flex gap popout" data-module="countup">
        <div className="stat text-reverse">
          <p className="stat-figure" style={{color:'#fff'}}>
            <span className="stat-prefix" style={{color:'#fff'}}>$</span>
            <CountUp endValue="4.2" />
            <span className="stat-suffix" style={{color:'#fff'}}>B</span>
          </p>
          <p className="stat-caption" style={{color:'#fff'}}>Total Contract</p>
        </div>
        <div className="stat text-reverse">
          <p className="stat-figure" style={{color:'#fff'}}>
            <CountUp endValue="9,000" />
          </p>
          <p className="stat-caption" style={{color:'#fff'}}>Total Company</p>
        </div>
        <div className="stat text-reverse">
          <p className="stat-figure" style={{color:'#fff'}}>
            <CountUp endValue="9" />
            <span className="stat-suffix" >%</span>
          </p>
          <p className="stat-caption" style={{color:'#fff'}}>of people think HealthCare</p>
        </div>
      </div>

    </article>
    </div>
  );
};

export default NumberIncress;
