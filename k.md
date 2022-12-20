## 1.如何定义props？
```vue
<script setup lang="ts">
interface Props {
	// Array<any> = any[]
	menuList: object[];
}

const props = withDefaults(defineProps<Props>(), {
	menuList: () => [],
});
</script>
```
