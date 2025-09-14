<script setup lang="ts">
useHead({ title: '项目' })
definePageMeta({ headerText: '参与的开源项目' })

interface Project {
  id: string
  title: string
  github: string
  description: string
  category: 'frontend' | 'backend' | 'fullstack' | 'theme' | 'tool'
  status: 'active' | 'maintained' | 'archived'
  featured?: boolean
  technologies: string[]
  demo?: string
  website?: string
}

const projects: Project[] = [
  {
    id: 'blog-v3',
    title: 'blog-v3',
    github: 'L33Z22L11/blog-v3',
    description: '个人博客网站，收获 100+ star，被多人使用',
    category: 'frontend',
    status: 'active',
    featured: true,
    technologies: ['Nuxt.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    website: 'https://blog.fuheng.vip'
  },
  {
    id: 'hexo-theme-stellar',
    title: 'hexo-theme-stellar',
    github: 'xaoxuu/hexo-theme-stellar',
    description: '简洁优雅的 Hexo 主题，支持多种功能',
    category: 'theme',
    status: 'maintained',
    featured: true,
    technologies: ['Hexo', 'EJS', 'Stylus', 'JavaScript']
  },
  {
    id: 'blog-feed',
    title: 'blog-feed',
    github: 'xiyou-linuxer/blog-feed',
    description: '使用 Nitro + MongoDB 搭建的博客订阅聚合 API',
    category: 'backend',
    status: 'active',
    technologies: ['Nitro', 'MongoDB', 'Node.js', 'TypeScript']
  },
  {
    id: 'zhilu-cv',
    title: 'zhilu-cv',
    github: 'L33Z22L11/zhilu-cv',
    description: '个人简历，使用 Nuxt.js 构建',
    category: 'frontend',
    status: 'active',
    technologies: ['Nuxt.js', 'Vue.js', 'TypeScript', 'SCSS']
  },
  {
    id: 'homepage-v5',
    title: 'homepage-v5',
    github: 'L33Z22L11/homepage-v5',
    description: '个人主页项目，展示个人信息和作品',
    category: 'frontend',
    status: 'active',
    featured: true,
    technologies: ['Nuxt.js', 'Vue.js', 'TypeScript', 'SCSS']
  }
]

const selectedCategory = ref<string>('all')
const selectedStatus = ref<string>('all')
const searchQuery = ref('')
const showFeaturedOnly = ref(false)

const categories = [
  { key: 'all', label: '全部', icon: 'ph:grid-four-duotone' },
  { key: 'frontend', label: '前端', icon: 'ph:code-duotone' },
  { key: 'backend', label: '后端', icon: 'ph:server-duotone' },
  { key: 'fullstack', label: '全栈', icon: 'ph:stack-duotone' },
  { key: 'theme', label: '主题', icon: 'ph:palette-duotone' },
  { key: 'tool', label: '工具', icon: 'ph:wrench-duotone' }
]

const statuses = [
  { key: 'all', label: '全部状态', icon: 'ph:list-duotone' },
  { key: 'active', label: '活跃开发', icon: 'ph:activity-duotone' },
  { key: 'maintained', label: '维护中', icon: 'ph:shield-check-duotone' },
  { key: 'archived', label: '已归档', icon: 'ph:archive-duotone' }
]

const filteredProjects = computed(() => {
  let filtered = projects

  // 按分类筛选
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(project => project.category === selectedCategory.value)
  }

  // 按状态筛选
  if (selectedStatus.value !== 'all') {
    filtered = filtered.filter(project => project.status === selectedStatus.value)
  }

  // 按搜索关键词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(project => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query))
    )
  }

  // 只显示精选
  if (showFeaturedOnly.value) {
    filtered = filtered.filter(project => project.featured)
  }

  return filtered
})

const getStatusColor = (status: string) => {
  const colorMap: Record<string, string> = {
    active: '#22c55e',      // 绿色 - 活跃
    maintained: '#3b82f6',  // 蓝色 - 维护中
    archived: '#6b7280'     // 灰色 - 已归档
  }
  return colorMap[status] || '#6b7280'
}

const getStatusText = (status: string) => {
  const textMap: Record<string, string> = {
    active: '活跃开发',
    maintained: '维护中',
    archived: '已归档'
  }
  return textMap[status] || status
}
</script>

<template>
  <div class="project-page">
    <!-- 页面标题 -->
    <ZField>
      <template #label>
        <span style="font-size: 2rem;">💻</span>
      </template>
      <h1 style="font-size: 2.5rem;">开源项目</h1>
      <p class="desc">
        参与开发的开源项目，展示技术栈和开发经验
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
            placeholder="搜索项目名称、描述或技术栈..."
            class="search-input"
          />
        </div>

        <!-- 分类筛选 -->
        <div class="filter-group">
          <h3 class="filter-title">分类</h3>
          <div class="filter-buttons">
            <button
              v-for="category in categories"
              :key="category.key"
              :class="['filter-button', { active: selectedCategory === category.key }]"
              @click="selectedCategory = category.key"
            >
              <Icon :name="category.icon" />
              <span>{{ category.label }}</span>
            </button>
          </div>
        </div>

        <!-- 状态筛选 -->
        <div class="filter-group">
          <h3 class="filter-title">状态</h3>
          <div class="filter-buttons">
            <button
              v-for="status in statuses"
              :key="status.key"
              :class="['filter-button', { active: selectedStatus === status.key }]"
              @click="selectedStatus = status.key"
            >
              <Icon :name="status.icon" />
              <span>{{ status.label }}</span>
            </button>
          </div>
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
            <span class="toggle-text">只显示精选项目</span>
          </label>
        </div>
      </div>
    </ZField>

    <!-- 统计信息 -->
    <ZField label="统计">
      <div class="stats">
        <div class="stat-item">
          <span class="stat-number">{{ filteredProjects.length }}</span>
          <span class="stat-label">个项目</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ projects.filter(p => p.featured).length }}</span>
          <span class="stat-label">精选</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ new Set(projects.map(p => p.category)).size }}</span>
          <span class="stat-label">分类</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ projects.filter(p => p.status === 'active').length }}</span>
          <span class="stat-label">活跃</span>
        </div>
      </div>
    </ZField>

    <!-- 项目列表 -->
    <ZField label="项目列表">
      <div class="projects-grid">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :class="['project-card', { featured: project.featured }]"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <!-- 项目头部 -->
          <div class="project-header">
            <div class="project-title-section">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-meta">
                <span
                  class="status-badge"
                  :style="{ backgroundColor: getStatusColor(project.status) }"
                >
                  {{ getStatusText(project.status) }}
                </span>
                <Icon
                  v-if="project.featured"
                  name="ph:star-fill"
                  class="featured-icon"
                />
              </div>
            </div>
            <div class="project-actions">
              <a
                :href="`https://github.com/${project.github}`"
                target="_blank"
                rel="noopener noreferrer"
                class="action-button"
                @click.stop
              >
                <Icon name="ph:github-logo-duotone" />
              </a>
              <a
                v-if="project.website"
                :href="project.website"
                target="_blank"
                rel="noopener noreferrer"
                class="action-button"
                @click.stop
              >
                <Icon name="ph:globe-duotone" />
              </a>
            </div>
          </div>

          <!-- 项目描述 -->
          <div class="project-description">
            {{ project.description }}
          </div>

          <!-- 技术栈 -->
          <div class="project-technologies">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>

          <!-- 项目统计 -->
          <div class="project-stats">
            <ZProject v-bind="project" />
          </div>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="filteredProjects.length === 0" class="empty-state">
        <Icon name="ph:folder-open-duotone" class="empty-icon" />
        <h3>没有找到相关项目</h3>
        <p>尝试调整筛选条件或搜索关键词</p>
      </div>
    </ZField>
  </div>
</template>

<style lang="scss" scoped>
.project-page {
  .desc {
    margin: 1rem 0;
    font-size: 1.2rem;
    color: var(--c-text-2);
  }
}

.filters {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.search-container {
  position: relative;
  max-width: 500px;
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

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.filter-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-text);
  margin: 0;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-button {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--c-bg-1);
  border: 1px solid var(--c-border);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: var(--delay, 0s);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px var(--c-shadow);
  }

  &.featured {
    border-color: #1a1a1a;
    box-shadow: 0 4px 20px rgba(26, 26, 26, 0.1);
  }
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-title-section {
  flex: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--c-text);
  margin: 0 0 0.5rem 0;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-badge {
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

.project-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--c-border);
  border-radius: 0.5rem;
  background: var(--c-bg-1);
  color: var(--c-text-2);
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: var(--c-bg-soft);
    color: var(--c-text);
    border-color: #1a1a1a;
  }

  .iconify {
    font-size: 1.1rem;
  }
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--c-text);
  margin-bottom: 1rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--c-bg-soft);
  color: var(--c-text-2);
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-stats {
  border-top: 1px solid var(--c-border);
  padding-top: 1rem;
  margin-top: 1rem;

  :deep(.project) {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;

    &:hover {
      background: transparent;
    }
  }
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
    gap: 1.5rem;
  }

  .filter-buttons {
    flex-direction: column;
  }

  .filter-button {
    justify-content: center;
  }

  .stats {
    justify-content: center;
    gap: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .project-actions {
    align-self: flex-end;
  }
}
</style>
