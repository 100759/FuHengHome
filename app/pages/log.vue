<script setup lang="ts">
import { ZhiluIcon, ZhiluIconOld } from '#components'

useHead({ title: '日志' })
definePageMeta({ headerText: '互联网上的活动记录' })

interface LogEntry {
  id: string
  date: string
  title: string
  description: string
  category: 'work' | 'project' | 'blog' | 'personal' | 'milestone'
  tags: string[]
  icon: string
  color: string
  featured?: boolean
}

const timeline: LogEntry[] = [
  {
    id: '2025-07-26',
    date: '2025-07-26',
    title: '博客迁移',
    description: '迁移 Nuxt Content 3，并更换域名 zhilu.site',
    category: 'blog',
    tags: ['Nuxt', 'Content', '域名'],
    icon: 'ph:globe-duotone',
    color: '#1a1a1a',
    featured: true
  },
  {
    id: '2025-05-04',
    date: '2025-05-04',
    title: '前端实习',
    description: '开始第一份前端开发实习工作',
    category: 'work',
    tags: ['工作', '前端', '实习'],
    icon: 'ph:briefcase-duotone',
    color: '#404040'
  },
  {
    id: '2025-03-11',
    date: '2025-03-11',
    title: '简历项目',
    description: '使用 Nuxt.js 开发个人简历网站',
    category: 'project',
    tags: ['Nuxt', '简历', '项目'],
    icon: 'ph:file-text-duotone',
    color: '#666666'
  },
  {
    id: '2024-08-11',
    date: '2024-08-11',
    title: '博客重构',
    description: '使用 Nuxt Content 重构个人博客',
    category: 'blog',
    tags: ['Nuxt', 'Content', '重构'],
    icon: 'ph:article-duotone',
    color: 'var(--c-accent)'
  },
  {
    id: '2024-06-01',
    date: '2024-06-01',
    title: '网站重构',
    description: '使用 Nuxt.js 重构个人网站',
    category: 'project',
    tags: ['Nuxt', '重构', '网站'],
    icon: 'ph:code-duotone',
    color: '#666666'
  },
  {
    id: '2024-02-17',
    date: '2024-02-17',
    title: 'VitePress 重写',
    description: '使用 VitePress 重写个人网站',
    category: 'project',
    tags: ['VitePress', '重写', '网站'],
    icon: 'ph:book-duotone',
    color: '#808080'
  },
  {
    id: '2023-05-24',
    date: '2023-05-24',
    title: 'Hexo 博客',
    description: '使用 Hexo 构建纸鹿摸鱼处博客',
    category: 'blog',
    tags: ['Hexo', '博客', '构建'],
    icon: 'ph:newspaper-duotone',
    color: 'var(--c-accent)'
  },
  {
    id: '2022-10-12',
    date: '2022-10-12',
    title: '原生前端',
    description: '使用原生前端技术重写个人网站',
    category: 'project',
    tags: ['原生', '前端', '重写'],
    icon: 'ph:code-simple-duotone',
    color: '#999999'
  },
  {
    id: '2021-09-24',
    date: '2021-09-24',
    title: '微信公众号',
    description: '开通微信公众号：纸鹿本鹿',
    category: 'personal',
    tags: ['微信', '公众号', '内容'],
    icon: 'ph:chat-circle-duotone',
    color: '#404040'
  },
  {
    id: '2020-08-10',
    date: '2020-08-10',
    title: '域名更换',
    description: '个人网站更换域名为 zhilu.cyou',
    category: 'milestone',
    tags: ['域名', '更换', '里程碑'],
    icon: 'ph:globe-stand-duotone',
    color: '#1a1a1a',
    featured: true
  },
  {
    id: '2019-12-27',
    date: '2019-12-27',
    title: 'Slogan 更新',
    description: '纸鹿至麓不知路，支炉制露不止漉',
    category: 'personal',
    tags: ['Slogan', '个人', '理念'],
    icon: 'ph:quotes-duotone',
    color: '#999999'
  },
  {
    id: '2019-07-19',
    date: '2019-07-19',
    title: '第一篇文章',
    description: '个人网站使用 Jekyll，发布第一篇文章',
    category: 'milestone',
    tags: ['Jekyll', '文章', '里程碑'],
    icon: 'ph:article-duotone',
    color: '#1a1a1a',
    featured: true
  },
  {
    id: '2019-05-24',
    date: '2019-05-24',
    title: '购买域名',
    description: '个人网站购买域名 zhilu.fun',
    category: 'milestone',
    tags: ['域名', '购买', '里程碑'],
    icon: 'ph:globe-stand-duotone',
    color: 'var(--c-accent)'
  },
  {
    id: '2019-03-01',
    date: '2019-03-01',
    title: 'Logo 设计',
    description: '设计新的 Logo 标识',
    category: 'personal',
    tags: ['Logo', '设计', '品牌'],
    icon: 'ph:palette-duotone',
    color: '#666666'
  },
  {
    id: '2019-02-06',
    date: '2019-02-06',
    title: 'Slogan 诞生',
    description: '纸鹿山行云潜日，日潜云行山路止',
    category: 'personal',
    tags: ['Slogan', '个人', '理念'],
    icon: 'ph:quotes-duotone',
    color: '#999999'
  },
  {
    id: '2017-09-08',
    date: '2017-09-08',
    title: '早期 Logo',
    description: '设计早期 Logo：PaperyDeer',
    category: 'personal',
    tags: ['Logo', '早期', '设计'],
    icon: 'ph:palette-duotone',
    color: '#b3b3b3'
  },
  {
    id: '2016-06-28',
    date: '2016-06-28',
    title: '网络活跃',
    description: '开始使用昵称 纸鹿君_L33Z22L11 在互联网上活跃',
    category: 'milestone',
    tags: ['昵称', '活跃', '里程碑'],
    icon: 'ph:user-duotone',
    color: '#1a1a1a',
    featured: true
  }
]

const selectedCategory = ref<string>('all')
const searchQuery = ref('')
const showFeaturedOnly = ref(false)

const categories = [
  { key: 'all', label: '全部', icon: 'ph:list-duotone' },
  { key: 'milestone', label: '里程碑', icon: 'ph:star-duotone' },
  { key: 'work', label: '工作', icon: 'ph:briefcase-duotone' },
  { key: 'project', label: '项目', icon: 'ph:code-duotone' },
  { key: 'blog', label: '博客', icon: 'ph:article-duotone' },
  { key: 'personal', label: '个人', icon: 'ph:user-duotone' }
]

const filteredTimeline = computed(() => {
  let filtered = timeline

  // 按分类筛选
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(item => item.category === selectedCategory.value)
  }

  // 按搜索关键词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // 只显示精选
  if (showFeaturedOnly.value) {
    filtered = filtered.filter(item => item.featured)
  }

  return filtered
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) {
    return '昨天'
  } else if (diffDays < 7) {
    return `${diffDays} 天前`
  } else if (diffDays < 30) {
    return `${Math.ceil(diffDays / 7)} 周前`
  } else if (diffDays < 365) {
    return `${Math.ceil(diffDays / 30)} 个月前`
  } else {
    return `${Math.ceil(diffDays / 365)} 年前`
  }
}

const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    milestone: '#1a1a1a',      // 深黑色 - 里程碑
    work: '#404040',           // 深灰色 - 工作
    project: '#666666',        // 中灰色 - 项目
    blog: '#808080',           // 浅灰色 - 博客
    personal: '#999999'        // 更浅灰色 - 个人
  }
  return colorMap[category] || '#b3b3b3'
}
</script>

<template>
  <div class="log-page">
    <!-- 页面标题 -->
    <ZField>
      <template #label>
        <span style="font-size: 2rem;">📅</span>
      </template>
      <h1 style="font-size: 2.5rem;">活动日志</h1>
      <p class="desc">
        记录在互联网上的重要活动和里程碑时刻
      </p>
    </ZField>

    <!-- 搜索和筛选 -->
    <ZField label="筛选">
      <div class="filters">
        <!-- 搜索框 -->
        <div class="search-container">
          <Icon name="ph:magnifying-glass-duotone" class="search-icon" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索日志内容..."
            class="search-input"
          />
        </div>

        <!-- 分类筛选 -->
        <div class="category-filters">
          <button
            v-for="category in categories"
            :key="category.key"
            :class="['category-button', { active: selectedCategory === category.key }]"
            @click="selectedCategory = category.key"
          >
            <Icon :name="category.icon" />
            <span>{{ category.label }}</span>
          </button>
        </div>

        <!-- 精选切换 -->
        <div class="featured-toggle">
          <label class="toggle-label">
            <input
              v-model="showFeaturedOnly"
              type="checkbox"
              class="toggle-input"
            />
            <span class="toggle-slider"></span>
            <span class="toggle-text">只显示精选</span>
          </label>
        </div>
      </div>
    </ZField>

    <!-- 统计信息 -->
    <ZField label="统计">
      <div class="stats">
        <div class="stat-item">
          <span class="stat-number">{{ filteredTimeline.length }}</span>
          <span class="stat-label">条记录</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ timeline.filter(item => item.featured).length }}</span>
          <span class="stat-label">精选</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ new Set(timeline.map(item => item.category)).size }}</span>
          <span class="stat-label">分类</span>
        </div>
      </div>
    </ZField>

    <!-- 时间线 -->
    <ZField label="时间线">
      <div class="timeline-container">
        <div class="timeline">
          <div
            v-for="(entry, index) in filteredTimeline"
            :key="entry.id"
            :class="['timeline-item', { featured: entry.featured }]"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <!-- 时间线连接线 -->
            <div class="timeline-connector"></div>
            
            <!-- 时间线节点 -->
            <div class="timeline-node">
              <div
                class="timeline-icon"
                :style="{ backgroundColor: entry.color }"
              >
                <Icon :name="entry.icon" />
              </div>
            </div>

            <!-- 内容卡片 -->
            <div class="timeline-content">
              <div class="timeline-card">
                <!-- 卡片头部 -->
                <div class="card-header">
                  <div class="card-title-section">
                    <h3 class="card-title">{{ entry.title }}</h3>
                    <div class="card-meta">
                      <span class="card-date">{{ entry.date }}</span>
                      <span class="card-relative">{{ formatDate(entry.date) }}</span>
                    </div>
                  </div>
                  <div class="card-category">
                    <span
                      class="category-badge"
                      :style="{ backgroundColor: getCategoryColor(entry.category) }"
                    >
                      {{ categories.find(c => c.key === entry.category)?.label }}
                    </span>
                    <Icon
                      v-if="entry.featured"
                      name="ph:star-fill"
                      class="featured-icon"
                    />
                  </div>
                </div>

                <!-- 卡片内容 -->
                <div class="card-body">
                  <p class="card-description">{{ entry.description }}</p>
                  
                  <!-- 标签 -->
                  <div v-if="entry.tags.length" class="card-tags">
                    <span
                      v-for="tag in entry.tags"
                      :key="tag"
                      class="tag"
                    >
                      #{{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
		</div>

        <!-- 空状态 -->
        <div v-if="filteredTimeline.length === 0" class="empty-state">
          <Icon name="ph:binoculars-duotone" class="empty-icon" />
          <h3>没有找到相关记录</h3>
          <p>尝试调整筛选条件或搜索关键词</p>
	</div>
      </div>
    </ZField>
</div>
</template>

<style lang="scss" scoped>
.log-page {
  .desc {
    margin: 1rem 0;
    font-size: 1.2rem;
    color: var(--c-text-2);
  }
}

.filters {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.search-container {
  position: relative;
  max-width: 400px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--c-text-2);
  font-size: 1.2rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 1px solid var(--c-border);
  border-radius: 0.75rem;
  background: var(--c-bg-1);
  color: var(--c-text);
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #1a1a1a;
    box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.1);
  }

  &::placeholder {
    color: var(--c-text-2);
  }
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.category-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--c-border);
  border-radius: 0.5rem;
  background: var(--c-bg-1);
  color: var(--c-text-2);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;

  &:hover {
    background: var(--c-bg-soft);
    color: var(--c-text);
  }

  &.active {
    background: #1a1a1a;
    color: white;
    border-color: #1a1a1a;
  }

  .iconify {
    font-size: 1.1rem;
  }
}

.featured-toggle {
  display: flex;
  align-items: center;
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
}

.toggle-input {
  display: none;
}

.toggle-slider {
  position: relative;
  width: 3rem;
  height: 1.5rem;
  background: var(--c-bg-2);
  border-radius: 1rem;
  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    width: 1.25rem;
    height: 1.25rem;
    background: white;
    border-radius: 50%;
    transition: all 0.3s;
  }
}

.toggle-input:checked + .toggle-slider {
  background: #1a1a1a;

  &::before {
    transform: translateX(1.5rem);
  }
}

.toggle-text {
  font-size: 0.9rem;
  color: var(--c-text);
}

.stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--c-text-2);
}

.timeline-container {
  position: relative;
}

.timeline {
	position: relative;
  padding-left: 2rem;

	&::before {
    content: '';
		position: absolute;
    left: 1rem;
    top: 0;
		bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      #1a1a1a,
      var(--c-bg-2),
      var(--c-bg-2)
    );
	}
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: var(--delay, 0s);

  &.featured {
    .timeline-card {
      border-color: #1a1a1a;
      box-shadow: 0 4px 20px rgba(26, 26, 26, 0.1);
    }

    .timeline-icon {
      box-shadow: 0 0 0 4px rgba(26, 26, 26, 0.1);
    }
  }
}

.timeline-connector {
  position: absolute;
  left: -1rem;
  top: 2rem;
  width: 2px;
  height: calc(100% + 2rem);
  background: var(--c-bg-2);
}

.timeline-node {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  z-index: 2;
}

.timeline-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  transition: all 0.3s;
  border: 3px solid var(--c-bg-1);
}

.timeline-content {
  margin-left: 1rem;
}

.timeline-card {
  background: var(--c-bg-1);
  border: 1px solid var(--c-border);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px var(--c-shadow);
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  gap: 1rem;
}

.card-title-section {
  flex: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--c-text);
  margin: 0 0 0.5rem 0;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--c-text-2);
}

.card-date {
  font-weight: 500;
}

.card-relative {
  opacity: 0.8;
}

.card-category {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.category-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
}

.featured-icon {
  color: #1a1a1a;
  font-size: 1.1rem;
}

.card-body {
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.card-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--c-text);
  margin: 0 0 1rem 0;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: var(--c-bg-soft);
  color: var(--c-text-2);
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
		color: var(--c-text-2);
	}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: var(--c-text);
}

.empty-state p {
  margin: 0;
  font-size: 1rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .filters {
    gap: 1rem;
  }

  .category-filters {
    flex-direction: column;
  }

  .category-button {
    justify-content: center;
  }

  .stats {
    justify-content: center;
    gap: 1.5rem;
  }

  .timeline {
    padding-left: 1.5rem;

    &::before {
      left: 0.75rem;
    }
  }

  .timeline-node {
    left: -1.5rem;
  }

  .timeline-icon {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.8rem;
  }

  .timeline-content {
    margin-left: 0.5rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .card-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .card-category {
    align-self: flex-end;
  }
}
</style>
