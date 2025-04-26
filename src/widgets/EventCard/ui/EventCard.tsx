import { TrophyIcon } from "@/shared/ui";
import { Clock, LocationArrow, Persons } from "@gravity-ui/icons";
import { Icon, Label, Text } from "@gravity-ui/uikit";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  address: string;
  numberParticipants: number;
  prize: number | null;
  dayBeforeStart: number;
  tags: string[];
  img: string;
}

function EventCard({
  title,
  address,
  dayBeforeStart,
  img,
  numberParticipants,
  prize,
  tags,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const [visibleTags, setVisibleTags] = useState<string[]>([]);
  const [hiddenCount, setHiddenCount] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !tagsRef.current || tags.length === 0) return;

    const container = containerRef.current;
    const tagsContainer = tagsRef.current;
    const gap = 8;
    let observer: ResizeObserver;

    const calculateVisibleTags = () => {
      const containerWidth = container.offsetWidth;
      const tags = Array.from(tagsContainer.children) as HTMLElement[];

      // Создаем временный элемент для измерения "+N"
      const tempMore = document.createElement("div");
      tempMore.style.cssText = `
        position: absolute;
        visibility: hidden;
        padding: 0 8px;
        font-size: 13px;
      `;
      tempMore.textContent = `+${tags.length}`;
      document.body.appendChild(tempMore);
      const moreWidth = tempMore.offsetWidth;
      document.body.removeChild(tempMore);

      let totalWidth = 0;
      let lastVisibleIndex = -1;

      // Первый проход: проверка без учета счетчика
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        const tagWidth = tag.offsetWidth + gap;
        if (totalWidth + tagWidth <= containerWidth) {
          totalWidth += tagWidth;
          lastVisibleIndex = i;
        } else {
          break;
        }
      }

      // Если все теги поместились
      if (lastVisibleIndex === tags.length - 1) {
        setVisibleTags(tags.map((t) => t.textContent || ""));
        setHiddenCount(0);
        return;
      }

      // Второй проход: с учетом счетчика
      totalWidth = moreWidth + gap;
      lastVisibleIndex = -1;

      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        const tagWidth = tag.offsetWidth + gap;
        if (totalWidth + tagWidth <= containerWidth) {
          totalWidth += tagWidth;
          lastVisibleIndex = i;
        } else {
          break;
        }
      }

      setVisibleTags(
        tags.slice(0, lastVisibleIndex + 1).map((t) => t.textContent || "")
      );
      setHiddenCount(tags.length - (lastVisibleIndex + 1));
    };

    // Запускаем расчет при монтировании и изменениях
    const init = () => {
      calculateVisibleTags();
      observer = new ResizeObserver(calculateVisibleTags);
      observer.observe(container);
    };

    // Даем время на рендер тегов
    requestAnimationFrame(init);

    return () => observer?.disconnect();
  }, [tags]);

  return (
    <div
      style={{
        width: 360,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#fff",
        display: "flex",
        gap: 16,
        cursor: "pointer",
      }}
    >
      <div style={{ width: 44 }}>
        <img
          src={img}
          alt="Event logo"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}
      >
        <Text variant="subheader-3">{title}</Text>

        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <Icon data={LocationArrow} size={12} />
          <Text variant="body-1">{address}</Text>
        </div>

        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {prize && (
            <Label size="xs" theme="warning" icon={<Icon data={TrophyIcon} />}>
              {prize} ₽
            </Label>
          )}
          <Label
            size="xs"
            theme="clear"
            icon={<Icon data={Persons} />}
            className="no-border-label"
          >
            {numberParticipants} участников
          </Label>
          <Label
            size="xs"
            theme="clear"
            icon={<Icon data={Clock} />}
            className="no-border-label"
          >
            {dayBeforeStart} дней до старта
          </Label>
        </div>

        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <div
            ref={tagsRef}
            style={{
              display: "flex",
              gap: 8,
              position: "absolute",
              left: 0,
              top: 0,
            }}
          >
            {tags.map((tag, index) => (
              <Label
                key={index}
                size="m"
                theme="clear"
                className="hidden-label-tag"
              >
                {tag}
              </Label>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            {visibleTags.map((tag, index) => (
              <Label key={index} size="m" theme="clear">
                {tag}
              </Label>
            ))}
            {hiddenCount > 0 && <Text variant="body-1">+{hiddenCount}</Text>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(EventCard);
