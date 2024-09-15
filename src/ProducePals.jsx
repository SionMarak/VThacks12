import React from 'react';
import styles from './ProducePals.module.css';

const ProducePals = () => {
  return (
    <section className={styles.hero}>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/66201e73eeb5969f8ee556142c4851bc77e4e0195d72e7c2dfe7ab80454866eb?placeholderIfAbsent=true&apiKey=be6c5e035e154000a4a5128ac93d1508" 
        className={styles.heroBackground} 
        alt=""
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Produce Pals</h1>
        <p className={styles.heroSubtitle}>
          Saving Fresh, Imperfect Produce, One Bite at a Time
        </p>
      </div>
    </section>
  );
};

export default ProducePals;