import { TestBed } from '@angular/core/testing';

import { EnseignantService } from './enseignant.service';

describe('EtudiantService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const departement : EnseignantService = TestBed.get(EnseignantService);
        expect(departement).toBeTruthy();
    })
})