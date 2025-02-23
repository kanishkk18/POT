class CryptoEcosystem {
    constructor() {
      this.clubTiers = [
        { name: 'SILVER_PRESTIGE', threshold: 2, reward: 2 },
        { name: 'EXECUTIVE', threshold: 4, reward: 4 },
        { name: 'VVIP_ACHIEVERS', threshold: 8, reward: 8 },
        { name: 'ELITE_LEADERS', threshold: 16, reward: 16 },
        { name: 'ROYAL', threshold: 32, reward: 32 },
        { name: 'AMBASSADORS', threshold: 64, reward: 64 },
        { name: 'ULTIMATE_CHAMPIONS', threshold: 128, reward: 128 },
        { name: 'TITANIUM_CROWN', threshold: 256, reward: 256 },
        { name: 'INFINITY', threshold: 512, reward: 512 },
        { name: 'LEGENDARY_ACE', threshold: 1024, reward: 1024 }
      ];
  
      this.allianceDistribution = {
        ALLIANCE1: 0.2,
        ALLIANCE2: 0.15,
        ALLIANCE3: 0.1,
        ALLIANCE4: 0.1,
        ALLIANCE5: 0.1,
        ALLIANCE6: 0.15,
        ALLIANCE7: 0.2
      };
    }
  
    processDeposit(user) {
      if (user.deposit !== 5) {
        throw new Error('Deposit must be exactly $5');
      }
  
      // Split deposit
      const clubAllocation = 2;
      const allianceAllocation = 3;
  
      // Initialize user state
      user.clubFunds = clubAllocation;
      user.allianceFunds = allianceAllocation;
      user.reinvestments = 0;
      user.withdrawable = 0;
      user.referrals = [];
      user.depositDate = new Date();
  
      this.processClubProgression(user);
      this.distributeAllianceFunds(user);
      return user;
    }
  
    processClubProgression(user) {
      const currentClub = this.clubTiers.findIndex(t => t.name === user.currentClub);
      
      while (user.clubFunds >= this.clubTiers[currentClub + 1]?.threshold) {
        user.currentClub = this.clubTiers[currentClub + 1].name;
        user.clubFunds -= this.clubTiers[currentClub + 1].threshold;
        user.reinvestments += this.clubTiers[currentClub + 1].threshold;
      }
    }
  
    distributeAllianceFunds(user) {
      let remaining = user.allianceFunds;
      for (const [alliance, percentage] of Object.entries(this.allianceDistribution)) {
        const allocation = remaining * percentage;
        user.allianceFunds -= allocation;
        user[alliance] = (user[alliance] || 0) + allocation;
      }
    }
  
    processWithdrawal(user) {
      const referralWindow = 30; // days
      const referralRequirement = 10;
      
      const daysSinceDeposit = Math.floor(
        (new Date() - user.depositDate) / (1000 * 60 * 60 * 24)
      );
  
      if (daysSinceDeposit > referralWindow) {
        return this.handleExpiredWithdrawal(user);
      }
  
      if (user.referrals.length >= referralRequirement) {
        user.withdrawable += 25;
        user.clubFunds = 0;
      } else {
        user.withdrawable += 10;
        user.clubFunds += 15; // Reinvest remaining
        this.processClubProgression(user);
      }
  
      return user;
    }
  
    handleExpiredWithdrawal(user) {
      user.withdrawable += 10;
      user.clubFunds += 15;
      this.processClubProgression(user);
      return user;
    }
  
    addReferral(user, referralId) {
      if (user.referrals.length < 10) {
        user.referrals.push({
          id: referralId,
          date: new Date(),
          valid: true
        });
      }
      return user;
    }
  }
  
  export default CryptoEcosystem;