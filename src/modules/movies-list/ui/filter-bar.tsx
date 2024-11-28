import { Button } from "@/shared/ui/button";

interface FilterBarProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

export function FilterBar({ tags, selectedTags, onTagSelect }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTags.includes(tag) ? "default" : "outline"}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}
