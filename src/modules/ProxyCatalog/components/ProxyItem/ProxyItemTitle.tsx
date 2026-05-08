import { useState, useRef, useEffect } from "react";
import "../../styles/style.css";
import { updateProxy } from "../../api/updateProxy";
import { ProxyCatalogItem } from "../../types";
import { useStoresUpdate } from "@/modules/StoresUpdater";
import { successHander, errorHander } from "@/shared/hotToast/handlers";

type EditableField = "name" | "url";

interface ProxyItemTitleProps extends ProxyCatalogItem {
  field: EditableField;
}

function ProxyItemTitle({
  id,
  name,
  url,
  domains,
  field,
}: ProxyItemTitleProps) {
  const currentValue = field === "name" ? name : url;

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(currentValue);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { update } = useStoresUpdate();

  useEffect(() => {
    setValue(field === "name" ? name : url);
  }, [name, url, field]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = async () => {
    const latestValue = field === "name" ? name : url;
    if (value === latestValue) {
      setIsEditing(false);
      return;
    }

    setIsLoading(true);
    try {
      const payload: ProxyCatalogItem = {
        id,
        name,
        url,
        domains,
        [field]: value,
      };

      await updateProxy(payload);
      successHander();
      update();
    } catch (error) {
      console.error(`Error updating proxy ${field}:`, error);
      errorHander();
    } finally {
      setIsLoading(false);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputRef.current?.blur();
    } else if (e.key === "Escape") {
      setValue(field === "name" ? name : url);
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    handleSave();
  };

  const displayValue = field === "name" ? name : url;

  if (isEditing) {
    return (
      <div className="proxy_title_cont proxy_title_cont--editing">
        <input
          ref={inputRef}
          type="text"
          className="proxy_title_input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          disabled={isLoading}
          aria-label={`Редактировать ${field === "name" ? "имя" : "URL"} прокси`}
        />
        {isLoading && (
          <span className="proxy_title_loading" aria-live="polite">
            ...
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="proxy_title_cont">
      <p
        className="proxy_title proxy_title--clickable"
        onClick={() => !isLoading && setIsEditing(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            !isLoading && setIsEditing(true);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Прокси ${field}: ${displayValue}. Нажмите для редактирования.`}
      >
        {displayValue}
      </p>
    </div>
  );
}

export { ProxyItemTitle };
