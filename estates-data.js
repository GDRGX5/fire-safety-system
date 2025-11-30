/**
 * ============================================================
 * 智能防火與逃生系統 - 統一屋苑數據庫
 * 版本：1.1.0
 * 功能：集中管理全港屋苑數據，供所有頁面使用
 * 香港創科展 2025-2026 參賽作品
 * ============================================================
 */

// 預設屋苑數據
const DEFAULT_ESTATES = {
    'meifoo': {
        name: '美孚新邨',
        aliases: ['美孚', '美孚新村'],
        buildings: [
            { name: '第1座', floors: 20, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第2座', floors: 20, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第3座', floors: 20, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第4座', floors: 20, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第5座', floors: 20, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第6座', floors: 20, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第7座', floors: 20, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第8座', floors: 20, units: ['A','B','C','D','E','F','G','H'] }
        ]
    },
    'taikoo': {
        name: '太古城',
        aliases: ['太古'],
        buildings: [
            { name: '東山閣', floors: 28, units: ['A','B','C','D','E','F'] },
            { name: '天山閣', floors: 28, units: ['A','B','C','D','E','F'] },
            { name: '泰山閣', floors: 28, units: ['A','B','C','D','E','F'] },
            { name: '廬山閣', floors: 28, units: ['A','B','C','D','E','F'] },
            { name: '南山閣', floors: 28, units: ['A','B','C','D','E','F'] },
            { name: '寶山閣', floors: 28, units: ['A','B','C','D','E','F'] },
            { name: '摘山閣', floors: 28, units: ['A','B','C','D','E','F'] },
            { name: '華山閣', floors: 28, units: ['A','B','C','D','E','F'] }
        ]
    },
    'cityone': {
        name: '沙田第一城',
        aliases: ['第一城', '城一'],
        buildings: [
            { name: '第1座', floors: 28, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第2座', floors: 28, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第3座', floors: 28, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第4座', floors: 28, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第5座', floors: 28, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第6座', floors: 28, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第7座', floors: 28, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第8座', floors: 28, units: ['A','B','C','D','E','F','G','H'] }
        ]
    },
    'whampoa': {
        name: '黃埔花園',
        aliases: ['黃埔'],
        buildings: [
            { name: '金柏苑1座', floors: 24, units: ['A','B','C','D','E','F'] },
            { name: '金柏苑2座', floors: 24, units: ['A','B','C','D','E','F'] },
            { name: '錦桃苑1座', floors: 24, units: ['A','B','C','D','E','F'] },
            { name: '錦桃苑2座', floors: 24, units: ['A','B','C','D','E','F'] },
            { name: '翠楊苑1座', floors: 24, units: ['A','B','C','D','E','F'] }
        ]
    },
    'tinyiu': {
        name: '天耀邨',
        aliases: ['天耀'],
        buildings: [
            { name: '耀民樓', floors: 35, units: ['1','2','3','4','5','6','7','8'] },
            { name: '耀富樓', floors: 35, units: ['1','2','3','4','5','6','7','8'] },
            { name: '耀興樓', floors: 35, units: ['1','2','3','4','5','6','7','8'] },
            { name: '耀康樓', floors: 35, units: ['1','2','3','4','5','6','7','8'] },
            { name: '耀盛樓', floors: 35, units: ['1','2','3','4','5','6','7','8'] },
            { name: '耀逸樓', floors: 35, units: ['1','2','3','4','5','6','7','8'] }
        ]
    },
    'sheklei': {
        name: '石籬邨',
        aliases: ['石籬'],
        buildings: [
            { name: '石寧樓', floors: 30, units: ['1','2','3','4','5','6','7','8'] },
            { name: '石秀樓', floors: 30, units: ['1','2','3','4','5','6','7','8'] },
            { name: '石俊樓', floors: 30, units: ['1','2','3','4','5','6','7','8'] },
            { name: '石逸樓', floors: 30, units: ['1','2','3','4','5','6','7','8'] },
            { name: '石興樓', floors: 30, units: ['1','2','3','4','5','6','7','8'] },
            { name: '石安樓', floors: 30, units: ['1','2','3','4','5','6','7','8'] }
        ]
    },
    'suiwo': {
        name: '穗禾苑',
        aliases: ['穗禾'],
        buildings: [
            { name: '豐裕閣', floors: 27, units: ['A','B','C','D','E','F','G','H'] },
            { name: '豐逸閣', floors: 27, units: ['A','B','C','D','E','F','G','H'] },
            { name: '豐年閣', floors: 27, units: ['A','B','C','D','E','F','G','H'] },
            { name: '慶寧閣', floors: 27, units: ['A','B','C','D','E','F','G','H'] },
            { name: '慶盛閣', floors: 27, units: ['A','B','C','D','E','F','G','H'] },
            { name: '慶安閣', floors: 27, units: ['A','B','C','D','E','F','G','H'] }
        ]
    },
    'kornhill': {
        name: '康山花園',
        aliases: ['康山', '康怡'],
        buildings: [
            { name: '第1座', floors: 32, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第2座', floors: 32, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第3座', floors: 32, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第4座', floors: 32, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第5座', floors: 32, units: ['A','B','C','D','E','F','G','H'] },
            { name: '第6座', floors: 32, units: ['A','B','C','D','E','F','G','H'] }
        ]
    }
};

// ============================================================
// 屋苑數據管理類
// ============================================================
class EstatesManager {
    constructor() {
        this.STORAGE_KEY = 'fire_safety_estates';
        this.estates = this.loadEstates();
    }

    // 載入屋苑數據（優先使用本地存儲）
    loadEstates() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('載入屋苑數據失敗:', e);
            }
        }
        // 使用預設數據並保存
        this.saveEstates(DEFAULT_ESTATES);
        return DEFAULT_ESTATES;
    }

    // 保存屋苑數據
    saveEstates(data) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data || this.estates));
        this.broadcastUpdate();
    }

    // 廣播更新
    broadcastUpdate() {
        if ('BroadcastChannel' in window) {
            const ch = new BroadcastChannel('fire_safety_sync');
            ch.postMessage({ type: 'estates_updated' });
        }
    }

    // 獲取所有屋苑
    getAllEstates() {
        return this.estates;
    }

    // 根據key獲取屋苑
    getEstate(key) {
        return this.estates[key] || null;
    }

    // 新增屋苑
    addEstate(key, data) {
        if (this.estates[key]) {
            return { success: false, error: '屋苑已存在' };
        }
        this.estates[key] = {
            name: data.name,
            aliases: data.aliases || [],
            buildings: data.buildings || []
        };
        this.saveEstates();
        return { success: true };
    }

    // 更新屋苑
    updateEstate(key, data) {
        if (!this.estates[key]) {
            return { success: false, error: '屋苑不存在' };
        }
        this.estates[key] = { ...this.estates[key], ...data };
        this.saveEstates();
        return { success: true };
    }

    // 刪除屋苑
    deleteEstate(key) {
        if (!this.estates[key]) {
            return { success: false, error: '屋苑不存在' };
        }
        delete this.estates[key];
        this.saveEstates();
        return { success: true };
    }

    // 新增大廈到屋苑
    addBuilding(estateKey, building) {
        if (!this.estates[estateKey]) {
            return { success: false, error: '屋苑不存在' };
        }
        this.estates[estateKey].buildings.push(building);
        this.saveEstates();
        return { success: true };
    }

    // 刪除大廈
    deleteBuilding(estateKey, buildingName) {
        if (!this.estates[estateKey]) {
            return { success: false, error: '屋苑不存在' };
        }
        const idx = this.estates[estateKey].buildings.findIndex(b => b.name === buildingName);
        if (idx === -1) {
            return { success: false, error: '大廈不存在' };
        }
        this.estates[estateKey].buildings.splice(idx, 1);
        this.saveEstates();
        return { success: true };
    }

    // 智能匹配屋苑（根據用戶輸入）
    matchEstate(input) {
        if (!input) return null;
        const normalizedInput = input.toLowerCase().replace(/\s/g, '');
        
        for (const [key, estate] of Object.entries(this.estates)) {
            // 檢查主名稱
            if (normalizedInput.includes(estate.name.toLowerCase())) {
                return { key, estate, confidence: 'high' };
            }
            // 檢查別名
            for (const alias of (estate.aliases || [])) {
                if (normalizedInput.includes(alias.toLowerCase())) {
                    return { key, estate, confidence: 'high' };
                }
            }
        }
        
        // 模糊匹配
        for (const [key, estate] of Object.entries(this.estates)) {
            const estateName = estate.name.toLowerCase();
            // 部分匹配
            if (estateName.includes(normalizedInput) || normalizedInput.includes(estateName.substring(0, 2))) {
                return { key, estate, confidence: 'medium' };
            }
        }
        
        return null;
    }

    // 驗證位置是否有效
    validateLocation(estateKey, buildingName, floor, unit) {
        const estate = this.estates[estateKey];
        if (!estate) {
            return { valid: false, error: '未知屋苑', needsManualReview: true };
        }

        // 查找大廈
        const building = estate.buildings.find(b => 
            b.name === buildingName || 
            b.name.includes(buildingName) || 
            buildingName.includes(b.name)
        );
        
        if (!building) {
            return { valid: false, error: '未知大廈', needsManualReview: true };
        }

        // 驗證樓層
        const floorNum = parseInt(floor);
        if (isNaN(floorNum) || floorNum < 1 || floorNum > building.floors) {
            return { valid: false, error: `樓層應在1-${building.floors}之間`, needsManualReview: true };
        }

        // 驗證單位（可選）
        if (unit && building.units.length > 0) {
            const normalizedUnit = unit.toUpperCase().replace(/室|號/g, '');
            if (!building.units.includes(normalizedUnit)) {
                return { valid: false, error: '未知單位', needsManualReview: true };
            }
        }

        return { valid: true, matched: { estate: estate.name, building: building.name, floor: floorNum, unit: unit } };
    }

    // 重置為預設數據
    resetToDefault() {
        this.estates = JSON.parse(JSON.stringify(DEFAULT_ESTATES));
        this.saveEstates();
        return { success: true };
    }

    // 導出數據
    exportData() {
        return JSON.stringify(this.estates, null, 2);
    }

    // 導入數據
    importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            this.estates = data;
            this.saveEstates();
            return { success: true };
        } catch (e) {
            return { success: false, error: '無效的JSON格式' };
        }
    }
}

// 創建全局實例
const estatesManager = new EstatesManager();

// 導出供其他頁面使用
if (typeof window !== 'undefined') {
    window.EstatesManager = EstatesManager;
    window.estatesManager = estatesManager;
    window.DEFAULT_ESTATES = DEFAULT_ESTATES;
}
