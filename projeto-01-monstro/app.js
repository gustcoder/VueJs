new Vue ({
    el: '#app',
    data: {
        isRunning: false,
        playerLife: 100,
        bossLife: 100,
        numberOfSpecialAttack: 5,
        numberOfHeals: 10,
        logs: [],
        minHeal: 10,
        maxHeal: 15
    },
    computed: {
        hasResult () {
            return this.playerLife === 0 || this.bossLife === 0
        },
        NoSpecialAttackLeft () {
            return this.numberOfSpecialAttack === 0
        },
        NoHealsLeft () {
            return this.numberOfHeals === 0
        },
    },
    methods: {
        newGame () {
            this.isRunning = true
            this.playerLife = 100
            this.bossLife = 100
            this.numberOfSpecialAttack = 5
            this.numberOfHeals = 10
            this.logs = []
        },
        attack (special) {
            if (special) {
                if (this.NoSpecialAttackLeft) {
                    this.registerLog('There is no Special Attacks available!', 'player')
                    return
                }
                this.numberOfSpecialAttack = Math.max(this.numberOfSpecialAttack - 1, 0)
            }

            this.hit('bossLife', 5, 10, special, 'Player', 'Boss', 'player')
            if (this.bossLife > 0) {
                this.hit('playerLife', 10, 14, false, 'Boss', 'Player', 'boss')
            }
        },
        hit (prop, min, max, special, source, target, cls) {
            const buff = special ? 5 : 0
            const hit = this.getRandom(min + buff, max + buff)
            this[prop] = Math.max(this[prop] - hit, 0)
            this.registerLog(`${source} hit ${target} with ${hit}.`, cls)
        },
        healAndHit () {
            if (this.NoHealsLeft) {
                this.registerLog('There is no Heals available!', 'player')
                return
            }

            this.heal(10, 15)
            this.hit('playerLife', 7, 12, false, 'Boss', 'Player', 'boss') // player sempre é o que leva dano com o heal
            this.numberOfHeals = Math.max(this.numberOfHeals - 1, 0)
        },
        heal (min, max) {
            if (!min) {
                min = this.minHeal
            }
            if (!max) {
                max = this.maxHeal
            }

            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Player was healed with ${heal}.`, 'player') // acao disparada sempre pelo player
            this.numberOfHeals = Math.max(this.numberOfHeals - 1, 0)
        },
        getRandom (min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog (text, cls) {
            this.logs.unshift( { text, cls } )
        }
    },
    watch: {
        hasResult (value) {
            value ? this.isRunning = false : this.isRunning = true
        }
    }
})