"use client";
import Link from "next/link";
import Image from "next/image";
import type { DeliverablesData } from "@/app/_libs/microcms";
import Date from "../Date";
import styles from "./index.module.css";
import { Fragment, useState } from "react";
import Modal from "react-modal";
import { useSwipeable } from "react-swipeable";

type Props = {
    data: DeliverablesData;
};

export default function DeliverablesArticle({ data }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const nextImage = () => {
        if (data.images) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.images.length);
        }
    };

    const prevImage = () => {
        if (data.images) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
            );
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextImage,
        onSwipedRight: prevImage,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <main className={styles.container}>
            <div className={styles.button_container}>
                <h1 className={styles.name}>{data.name}</h1>
                <Link href="/deliverables" className={styles.button}>一覧に戻る</Link>
                <h1 className={styles.mobile_name}>{data.name}</h1>
            </div>
            {data.thumbnail && (
                <Image
                    src={data.thumbnail.url}
                    alt=""
                    className={styles.thumbnail}
                    width={data.thumbnail.width}
                    height={data.thumbnail.height}
                />
            )}
            {data.detail && (
                <p className={styles.detail}>
                    {data.detail.split("\n").map((line, index) => (
                        <Fragment key={index}>
                            {line}
                            <br />
                        </Fragment>
                    ))}
                </p>
            )}
            {data.images && data.images.length > 0 && (
                <>
                    <h2 className={styles.imagesTitle}>画像</h2>
                    <div className={styles.imageContainer}>
                        {data.images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.url}
                                alt={`Image ${index + 1}`}
                                className={styles.image}
                                width={image.width}
                                height={image.height}
                                onClick={() => openModal(index)}
                            />
                        ))}
                    </div>
                </>
            )}
            {data.file && (
                <div className={styles.file}>
                    <a href={data.file} className={styles.filelink} target="_blank">
                        実際の成果物はこちら
                    </a>
                </div>
            )}
            <p className={styles.date}>取得日: <Date date={data.date} /></p>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className={styles.modal}
                overlayClassName={styles.overlay}
                ariaHideApp={false}
            >
                <div {...handlers} className={styles.modalContent}>
                    <button className={styles.closeButton} onClick={closeModal}>×</button>
                    {data.images && data.images.length > 0 && (
                        <>
                            <button className={styles.prevButton} onClick={prevImage}>‹</button>
                            <Image
                                src={data.images[currentIndex].url}
                                alt={`Image ${currentIndex + 1}`}
                                width={data.images[currentIndex].width}
                                height={data.images[currentIndex].height}
                                className={styles.modalImage}
                            />
                            <button className={styles.nextButton} onClick={nextImage}>›</button>
                        </>
                    )}
                </div>
            </Modal>
        </main>
    );
}
